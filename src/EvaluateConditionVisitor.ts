import deepEqual from 'fast-deep-equal';
import T6TriggerVisitor from './gen/T6TriggerVisitor';
import { FieldTokenModel } from './FieldTokenModel';
import {
  AnyExprCtx,
  BinaryExprCtx,
  ComparatorExprCtx,
  ComplexExprCtx,
  CountComplexExprCtx,
  CountExprCtx,
  DateTimeCtx,
  EFieldType,
  EmptyExprCtx,
  IImageDataValue,
  IVehicleDataValue,
  NotExprCtx,
  NumberCtx,
  NumberExprCtx,
  NumbersExprCtx,
  OpCtx,
  ParenExprCtx,
  ParseCtx,
  ValueCtx,
  ValueExprCtx,
  ValuesExprCtx,
  VehicleImpactExprCtx,
} from './types';

type TFieldName = string;
type TFieldTokensArr = FieldTokenModel[];
type TFieldTokensScope = Record<TFieldName, FieldTokenModel[]>;
type TFieldTokens = TFieldTokensArr | TFieldTokensScope;
interface ITruthyEvaluationResult {
  evaluationResult: true;
  triggeredFieldTokens: Set<FieldTokenModel>;
}
type TEvaluationResult = ITruthyEvaluationResult | null;
enum EDateTimeUnits {
  D = 'd',
  M = 'm',
  Y = 'y',
}

export class EvaluateConditionVisitor extends T6TriggerVisitor {
  private fieldTokensScope: TFieldTokensScope = {};
  evaluationResult: boolean = false;
  triggeredFieldTokens: FieldTokenModel[] | null = null;

  constructor(fieldTokens: TFieldTokens) {
    super();
    this.setFieldTokensScope(fieldTokens);
  }

  private setFieldTokensScope(tokens: TFieldTokens) {
    if (this.isArray(tokens)) {
      this.fieldTokensScope = getScope(tokens);
    } else {
      this.fieldTokensScope = { ...tokens };
    }

    function getScope(tokens: FieldTokenModel[], result: TFieldTokensScope = {}) {
      for (const token of tokens) {
        result[token.fieldName] = result[token.fieldName]
          ? [...result[token.fieldName], token]
          : [token];

        if (token.fieldType === EFieldType.complex) {
          getScope(token.children, result);
        }
      }

      return result;
    }
  }

  private checkFieldType<T>(
    fieldTokens: FieldTokenModel[],
    acceptableFieldTypes: EFieldType[]
  ): asserts fieldTokens is FieldTokenModel<T>[] {
    if (!fieldTokens.every((ft) => acceptableFieldTypes.includes(ft.fieldType))) {
      throw new Error(
        `Incorrect model type for [${fieldTokens[0].fieldName}]: actual - [${
          fieldTokens[0].fieldType
        }], requested - [${acceptableFieldTypes.join('|')}]`
      );
    }
  }

  private getRelevantFieldTokens(conditionFieldName: string) {
    const relevantTokens = this.fieldTokensScope[conditionFieldName];
    return relevantTokens && relevantTokens.length > 0 ? relevantTokens : null;
  }

  private getConditionValue(ctx: ValueCtx | NumberCtx | DateTimeCtx) {
    const inputStream = ctx.start.source[1];
    if (!inputStream) throw new Error('InputStream is missing in TokenSourceTuple');

    return inputStream.getText(ctx.start.start, ctx.stop.stop);
  }

  private truthifyResult(result: TEvaluationResult, token: FieldTokenModel) {
    if (result) {
      const res = { ...result };
      res.triggeredFieldTokens = res.triggeredFieldTokens.add(token);
      return res;
    } else {
      return {
        evaluationResult: true,
        triggeredFieldTokens: new Set<FieldTokenModel>().add(token),
      } as ITruthyEvaluationResult;
    }
  }

  private dateTimeValueParse(rawValue: string) {
    const parsedValue = rawValue.match(/^[1-9]\d*/);
    const parsedUnit = rawValue.match(/[a-z]+$/i);

    const value = parsedValue ? parsedValue[0] : parsedValue;
    let unit = parsedUnit ? parsedUnit[0].toLowerCase() : parsedUnit;

    switch (unit) {
      case 'day':
      case 'days':
        unit = EDateTimeUnits.D;
        break;
      case 'month':
      case 'months':
        unit = EDateTimeUnits.M;
        break;
      case 'year':
      case 'years':
        unit = EDateTimeUnits.Y;
    }

    return { value, unit };
  }

  private dateTimeValueConverter(
    tokenUnit: string,
    rowTokenValue: string,
    conditionUnit: string,
    rowConditionValue: string
  ) {
    const tokenValue = Number(rowTokenValue);
    const conditionValue = Number(rowConditionValue);

    if (tokenUnit === conditionUnit) {
      return { tokenValue, conditionValue };
    } else if (tokenUnit === EDateTimeUnits.D && conditionUnit === EDateTimeUnits.M) {
      return { tokenValue: tokenValue / 30, conditionValue };
    } else if (tokenUnit === EDateTimeUnits.D && conditionUnit === EDateTimeUnits.Y) {
      return { tokenValue: tokenValue / 360, conditionValue };
    } else if (tokenUnit === EDateTimeUnits.M && conditionUnit === EDateTimeUnits.D) {
      return { tokenValue: tokenValue * 30, conditionValue };
    } else if (tokenUnit === EDateTimeUnits.M && conditionUnit === EDateTimeUnits.Y) {
      return { tokenValue: tokenValue / 12, conditionValue };
    } else if (tokenUnit === EDateTimeUnits.Y && conditionUnit === EDateTimeUnits.D) {
      return { tokenValue: tokenValue * 360, conditionValue };
    } else if (tokenUnit === EDateTimeUnits.Y && conditionUnit === EDateTimeUnits.M) {
      return { tokenValue: tokenValue * 12, conditionValue };
    }
  }

  private compare(opCtx: OpCtx, tokenValue: number, conditionValue: number) {
    if (opCtx.GT()) return tokenValue > conditionValue;
    if (opCtx.GE()) return tokenValue >= conditionValue;
    if (opCtx.LT()) return tokenValue < conditionValue;
    if (opCtx.LE()) return tokenValue <= conditionValue;
    if (opCtx.EQ()) return tokenValue === conditionValue;

    return false;
  }

  private isTruthy(result: TEvaluationResult): result is ITruthyEvaluationResult {
    return result !== null;
  }

  private isTokenValueEmpty(token: FieldTokenModel) {
    const { fieldType, fieldValue } = token;

    switch (fieldType) {
      case EFieldType.complex:
        return fieldValue === undefined;
      case EFieldType.decimal:
      case EFieldType.integer:
      case EFieldType.timestamp:
        return fieldValue === null;
      case EFieldType.ais:
      case EFieldType.enum:
      case EFieldType.string:
        return fieldValue === '';

      case EFieldType.enum_list:
        try {
          return (fieldValue as string[]).length === 0;
        } catch {
          throw new Error(
            'Check the value for the enum_list type field. It must be like array literal - []'
          );
        }

      case EFieldType.image:
        try {
          return (
            (fieldValue as IImageDataValue).hasOwnProperty('images') &&
            (fieldValue as IImageDataValue).images.length === 0
          );
        } catch {
          throw new Error(
            'Check the value for the image type field. It must be like this object literal - { images: [] }'
          );
        }

      case EFieldType.vehicleImpactType:
        try {
          return Object.keys(fieldValue as IVehicleDataValue).length === 0;
        } catch {
          throw new Error(
            'Check the value for the vehicleImpactType field. It must be like object literal - {}'
          );
        }

      default:
        throw new Error('Check the fieldType for the value');
    }
  }

  private isTokenValuesEqual(token1: FieldTokenModel, token2: FieldTokenModel) {
    let fieldType: EFieldType;

    if (token1.fieldType === token2.fieldType) {
      fieldType = token1.fieldType;
    } else {
      throw new Error('Field types must be equal');
    }

    switch (fieldType) {
      case EFieldType.ais:
      case EFieldType.enum:
      case EFieldType.string:
      case EFieldType.decimal:
      case EFieldType.integer:
        return token1.fieldValue === token2.fieldValue;

      case EFieldType.timestamp:
        try {
          return token1.fieldValue === null || token2.fieldValue === null
            ? token1.fieldValue === token2.fieldValue
            : (token1.fieldValue as Date).getTime() === (token2.fieldValue as Date).getTime();
        } catch {
          throw new Error('Check the value for the timestamp type. It must be Date type');
        }

      case EFieldType.enum_list:
        try {
          const arr1 = token1.fieldValue as string[];
          const arr2 = token2.fieldValue as string[];
          return this.isArraysEqual(arr1, arr2);
        } catch {
          throw new Error(
            'Check the value for the enum_list type field. It must be like array literal - []'
          );
        }

      case EFieldType.image:
        try {
          const obj1 = token1.fieldValue as IImageDataValue;
          const obj2 = token2.fieldValue as IImageDataValue;
          return deepEqual(obj1, obj2);
        } catch {
          throw new Error(
            'Check the value for the image type field. It must be like this object literal - { images: [] }'
          );
        }

      case EFieldType.vehicleImpactType:
        try {
          const t1ValCopy = { ...(token1.fieldValue as IVehicleDataValue) };
          delete t1ValCopy.passengerPositions;
          delete t1ValCopy.impactSides;

          const t2ValCopy = { ...(token2.fieldValue as IVehicleDataValue) };
          delete t2ValCopy.passengerPositions;
          delete t2ValCopy.impactSides;

          if (deepEqual(t1ValCopy, t2ValCopy)) {
            return (
              this.isArraysEqual(
                (token1.fieldValue as IVehicleDataValue).passengerPositions ?? [],
                (token2.fieldValue as IVehicleDataValue).passengerPositions ?? []
              ) &&
              this.isArraysEqual(
                (token1.fieldValue as IVehicleDataValue).impactSides ?? [],
                (token2.fieldValue as IVehicleDataValue).impactSides ?? []
              )
            );
          }

          return false;
        } catch {
          throw new Error(
            'Check the value for the vehicleImpactType field. It must be like object literal - {}'
          );
        }

      default:
        throw new Error('Check the fieldType for the value');
    }
  }

  private isArray(fieldTokens: TFieldTokens): fieldTokens is TFieldTokensArr {
    return Array.isArray(fieldTokens);
  }

  private isArraysEqual(arr1: unknown[], arr2: unknown[]) {
    return arr1.length === arr2.length && arr1.every((a1) => arr2.includes(a1));
  }

  private isNumeric(token: FieldTokenModel): token is FieldTokenModel<number | null> {
    return token.fieldType === EFieldType.integer || token.fieldType === EFieldType.decimal;
  }

  private isString(token: FieldTokenModel): token is FieldTokenModel<string> {
    return (
      token.fieldType === EFieldType.ais ||
      token.fieldType === EFieldType.enum ||
      token.fieldType === EFieldType.string
    );
  }

  private isEnumList(token: FieldTokenModel): token is FieldTokenModel<string[]> {
    return token.fieldType === EFieldType.enum_list;
  }

  override visitParse(ctx: ParseCtx) {
    try {
      const res = super.visit(ctx.expr()) as TEvaluationResult;

      if (res) {
        const { evaluationResult, triggeredFieldTokens } = res;
        this.evaluationResult = evaluationResult;
        this.triggeredFieldTokens = [...triggeredFieldTokens];
      }
    } catch (e) {
      throw e;
    }
  }

  override visitBinaryExpr(ctx: BinaryExprCtx) {
    let res: TEvaluationResult = null;
    const leftExprResult = super.visit(ctx.expr(0)) as TEvaluationResult;
    const rightExprResult = super.visit(ctx.expr(1)) as TEvaluationResult;

    const isOrOperator = !!ctx.binary().OR();

    if (isOrOperator) {
      if (this.isTruthy(leftExprResult) && this.isTruthy(rightExprResult)) {
        res = {
          evaluationResult: true,
          triggeredFieldTokens: new Set([
            ...leftExprResult.triggeredFieldTokens,
            ...rightExprResult.triggeredFieldTokens,
          ]),
        };
        return res;
      } else if (this.isTruthy(leftExprResult)) {
        return leftExprResult;
      } else if (this.isTruthy(rightExprResult)) {
        return rightExprResult;
      } else {
        return res;
      }
    } else {
      if (this.isTruthy(leftExprResult) && this.isTruthy(rightExprResult)) {
        res = {
          evaluationResult: true,
          triggeredFieldTokens: new Set([
            ...leftExprResult.triggeredFieldTokens,
            ...rightExprResult.triggeredFieldTokens,
          ]),
        };
        return res;
      } else {
        return res;
      }
    }
  }

  override visitComparatorExpr(ctx: ComparatorExprCtx) {
    let res: TEvaluationResult = null;
    const conditionFieldName = ctx.field().getText();
    const relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
    if (!relevantTokens) return res;

    const acceptableFieldTypes = [EFieldType.string, EFieldType.integer, EFieldType.decimal];
    this.checkFieldType<string | number | null>(relevantTokens, acceptableFieldTypes);

    const conditionValue = ctx.comparator().number()
      ? this.getConditionValue(ctx.comparator().number())
      : this.getConditionValue(ctx.comparator().dateTime());

    const operatorCtx = ctx.comparator().op();

    for (const token of relevantTokens) {
      if (this.isString(token)) {
        const { value: rowTokenValue, unit: tokenUnit } = this.dateTimeValueParse(token.fieldValue);
        const { value: rowCondValue, unit: condUnit } = this.dateTimeValueParse(conditionValue);

        // prettier-ignore
        const isValuesAndUnitsNotNull = rowTokenValue !== null &&
          tokenUnit !== null &&
          rowCondValue !== null &&
          condUnit !== null;

        if (isValuesAndUnitsNotNull) {
          const converterResult = this.dateTimeValueConverter(
            tokenUnit,
            rowTokenValue,
            condUnit,
            rowCondValue
          );

          if (converterResult) {
            const { tokenValue, conditionValue } = converterResult;

            if (this.compare(operatorCtx, tokenValue, conditionValue)) {
              res = this.truthifyResult(res, token);
            }
          }
        }
      } else if (
        this.isNumeric(token) &&
        token.fieldValue !== null &&
        this.compare(operatorCtx, token.fieldValue, Number(conditionValue))
      ) {
        res = this.truthifyResult(res, token);
      }
    }

    return res;
  }

  override visitAnyExpr(ctx: AnyExprCtx) {
    let res: TEvaluationResult = null;
    const conditionFieldName = ctx.field().getText();
    const relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
    if (!relevantTokens) return res;

    for (const token of relevantTokens) {
      if (!this.isTokenValueEmpty(token)) {
        res = this.truthifyResult(res, token);
      }
    }

    return res;
  }

  override visitEmptyExpr(ctx: EmptyExprCtx) {
    let res: TEvaluationResult = null;
    const conditionFieldName = ctx.field().getText();
    const relevantTokens = this.getRelevantFieldTokens(conditionFieldName);

    if (relevantTokens) {
      for (const token of relevantTokens) {
        if (this.isTokenValueEmpty(token)) {
          res = this.truthifyResult(res, token);
        }
      }
    } else {
      res = {
        evaluationResult: true,
        triggeredFieldTokens: new Set(),
      };
    }

    return res;
  }

  override visitNumberExpr(ctx: NumberExprCtx) {
    let res: TEvaluationResult = null;
    const conditionFieldName = ctx.field().getText();
    const relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
    if (!relevantTokens) return res;

    const acceptableFieldTypes = [EFieldType.ais, EFieldType.integer, EFieldType.decimal];
    this.checkFieldType<string | number | null>(relevantTokens, acceptableFieldTypes);

    const conditionValue = this.getConditionValue(ctx.number());

    for (const token of relevantTokens) {
      if (this.isString(token) && token.fieldValue === conditionValue) {
        res = this.truthifyResult(res, token);
      } else if (
        this.isNumeric(token) &&
        token.fieldValue !== null &&
        token.fieldValue === Number(conditionValue)
      ) {
        res = this.truthifyResult(res, token);
      }
    }

    return res;
  }

  override visitNumbersExpr(ctx: NumbersExprCtx) {
    let res: TEvaluationResult = null;
    const conditionFieldName = ctx.field().getText();
    const relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
    if (!relevantTokens) return res;

    const acceptableFieldTypes = [EFieldType.ais, EFieldType.integer, EFieldType.decimal];
    this.checkFieldType<string | number | null>(relevantTokens, acceptableFieldTypes);

    const conditionValue = ctx
      .numbers()
      .number()
      .map((nCtx) => this.getConditionValue(nCtx));

    for (const token of relevantTokens) {
      if (this.isString(token) && conditionValue.includes(token.fieldValue)) {
        res = this.truthifyResult(res, token);
      } else if (
        this.isNumeric(token) &&
        token.fieldValue !== null &&
        conditionValue.includes(String(token.fieldValue))
      ) {
        res = this.truthifyResult(res, token);
      }
    }

    return res;
  }

  override visitNotExpr(ctx: NotExprCtx) {
    let res: TEvaluationResult = null;
    const conditionFieldName = ctx.field().getText();
    const relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
    if (!relevantTokens) return res;

    const acceptableFieldTypes = [
      EFieldType.ais,
      EFieldType.integer,
      EFieldType.decimal,
      EFieldType.string,
      EFieldType.enum,
      EFieldType.enum_list,
    ];
    this.checkFieldType<number | string | string[] | null>(relevantTokens, acceptableFieldTypes);

    const conditionValue = ctx.not().numbers()
      ? ctx
          .not()
          .numbers()
          .number()
          .map((nCtx) => this.getConditionValue(nCtx))
      : ctx
          .not()
          .values()
          .value()
          .map((vCtx) => this.getConditionValue(vCtx).toLowerCase());

    for (const token of relevantTokens) {
      if (this.isString(token) && !conditionValue.includes(token.fieldValue.toLowerCase())) {
        res = this.truthifyResult(res, token);
      } else if (this.isNumeric(token) && !conditionValue.includes(String(token.fieldValue))) {
        res = this.truthifyResult(res, token);
      } else if (this.isEnumList(token)) {
        const tokenValue = token.fieldValue.map((fv) => fv.toLowerCase());

        if (conditionValue.every((cv) => !tokenValue.includes(cv))) {
          res = this.truthifyResult(res, token);
        }
      }
    }

    return res;
  }

  override visitComplexExpr(ctx: ComplexExprCtx) {
    return super.visit(ctx.complex().expr()) as TEvaluationResult;
  }

  override visitCountExpr(ctx: CountExprCtx) {
    let res: TEvaluationResult = null;
    const conditionFieldName = ctx.field().getText();
    const relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
    if (!relevantTokens) return res;

    const acceptableFieldTypes = [EFieldType.string, EFieldType.enum];
    this.checkFieldType<string>(relevantTokens, acceptableFieldTypes);

    const conditionValue = ctx.count().value() ? this.getConditionValue(ctx.count().value()) : null; // null = $DISTINCT
    const operatorCtx = ctx.count().comparator().op();
    const conditionValueCount = this.getConditionValue(ctx.count().comparator().number());
    const tokensForCount = conditionValue
      ? relevantTokens.filter((rt) => rt.fieldValue === conditionValue)
      : relevantTokens.reduce((uniqueNameTokens, rt) => {
          if (uniqueNameTokens.every((unt) => unt.fieldValue !== rt.fieldValue)) {
            uniqueNameTokens.push(rt);
          }

          return uniqueNameTokens;
        }, [] as FieldTokenModel<string>[]);

    if (this.compare(operatorCtx, tokensForCount.length, Number(conditionValueCount))) {
      for (const token of tokensForCount) {
        res = this.truthifyResult(res, token);
      }
    }

    return res;
  }

  override visitCountComplexExpr(ctx: CountComplexExprCtx) {
    let res: TEvaluationResult = null;
    const conditionFieldName = ctx.field().getText();
    const parentTokens = this.getRelevantFieldTokens(conditionFieldName);
    if (!parentTokens) return res;

    const acceptableFieldTypes = [EFieldType.complex];
    this.checkFieldType<undefined>(parentTokens, acceptableFieldTypes);

    const operatorCtx = ctx.countComplex().comparator().op();
    const conditionResultsCount = this.getConditionValue(ctx.countComplex().comparator().number());
    const distinctFieldName = ctx.countComplex().DISTINCT()
      ? ctx.countComplex().field().getText()
      : null;
    const distinctFieldTokens: FieldTokenModel[] = [];
    let childTokens: FieldTokenModel[] = [];
    let truthyParentResultsCount = 0;

    const originScope = this.fieldTokensScope;

    parentLoop: for (const parentToken of parentTokens) {
      this.setFieldTokensScope(parentToken.children);
      const parentResult = super.visit(ctx.countComplex().expr()) as TEvaluationResult;

      if (this.isTruthy(parentResult) && distinctFieldName) {
        const childTokensBuffer = [];

        for (const childToken of parentResult.triggeredFieldTokens) {
          if (
            childToken.fieldName === distinctFieldName &&
            distinctFieldTokens.some((distinctToken) => {
              return this.isTokenValuesEqual(distinctToken, childToken);
            })
          ) {
            continue parentLoop;
          } else if (childToken.fieldName === distinctFieldName) {
            distinctFieldTokens.push(childToken);
            childTokensBuffer.push(childToken);
          } else {
            childTokensBuffer.push(childToken);
          }
        }

        if (childTokensBuffer.length > 0) {
          truthyParentResultsCount++;
          childTokens = [...childTokens, ...childTokensBuffer];
        }
      } else if (this.isTruthy(parentResult)) {
        truthyParentResultsCount++;
        childTokens = [...childTokens, ...parentResult.triggeredFieldTokens];
      }
    }

    this.setFieldTokensScope(originScope);

    if (this.compare(operatorCtx, truthyParentResultsCount, Number(conditionResultsCount))) {
      res = {
        evaluationResult: true,
        triggeredFieldTokens: new Set<FieldTokenModel>(childTokens),
      };

      return res;
    }

    return res;
  }

  override visitParenExpr(ctx: ParenExprCtx) {
    return super.visit(ctx.expr()) as TEvaluationResult;
  }

  override visitVehicleImpactExpr(ctx: VehicleImpactExprCtx) {
    let res: TEvaluationResult = null;
    const conditionFieldName = ctx.field().getText();
    const relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
    if (!relevantTokens) return res;

    const acceptableFieldTypes = [EFieldType.vehicleImpactType];
    this.checkFieldType<IVehicleDataValue>(relevantTokens, acceptableFieldTypes);

    const conditionValue = ctx.vehicleImpact().INT().getText();

    for (const token of relevantTokens) {
      if (token.fieldValue.impactSides?.includes(Number(conditionValue))) {
        res = this.truthifyResult(res, token);
      }
    }

    return res;
  }

  override visitValueExpr(ctx: ValueExprCtx) {
    let res: TEvaluationResult = null;
    const conditionFieldName = ctx.field().getText();
    const relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
    if (!relevantTokens) return res;

    const acceptableFieldTypes = [EFieldType.string, EFieldType.enum, EFieldType.enum_list];
    this.checkFieldType<string | string[]>(relevantTokens, acceptableFieldTypes);

    const conditionValue = this.getConditionValue(ctx.value());

    for (const token of relevantTokens) {
      if (this.isEnumList(token)) {
        const tokenValueLC = token.fieldValue.map((tv) => tv.toLowerCase());

        if (tokenValueLC.includes(conditionValue.toLowerCase())) {
          res = this.truthifyResult(res, token);
        }
      } else if (this.isString(token)) {
        if (token.fieldValue.toLowerCase() === conditionValue.toLowerCase()) {
          res = this.truthifyResult(res, token);
        }
      }
    }

    return res;
  }

  override visitValuesExpr(ctx: ValuesExprCtx) {
    let res: TEvaluationResult = null;
    const conditionFieldName = ctx.field().getText();
    const relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
    if (!relevantTokens) return res;

    const acceptableFieldTypes = [EFieldType.string, EFieldType.enum, EFieldType.enum_list];
    this.checkFieldType<string | string[]>(relevantTokens, acceptableFieldTypes);

    const conditionValues = ctx
      .values()
      .value()
      .map((vCtx) => this.getConditionValue(vCtx).toLowerCase());

    for (const token of relevantTokens) {
      if (this.isEnumList(token)) {
        const tokenValue = token.fieldValue.map((tv) => tv.toLowerCase());

        if (conditionValues.some((cv) => tokenValue.includes(cv))) {
          res = this.truthifyResult(res, token);
        }
      } else if (this.isString(token)) {
        if (conditionValues.includes(token.fieldValue.toLowerCase())) {
          res = this.truthifyResult(res, token);
        }
      }
    }

    return res;
  }
}
