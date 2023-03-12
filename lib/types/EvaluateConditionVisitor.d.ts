import T6TriggerVisitor from './gen/T6TriggerVisitor';
import { FieldTokenModel } from './FieldTokenModel';
import { AnyExprCtx, BinaryExprCtx, ComparatorExprCtx, ComplexExprCtx, CountComplexExprCtx, CountExprCtx, EmptyExprCtx, NotExprCtx, NumberExprCtx, NumbersExprCtx, ParenExprCtx, ParseCtx, ValueExprCtx, ValuesExprCtx, VehicleImpactExprCtx } from './types';
type TFieldName = string;
type TFieldTokensArr = FieldTokenModel[];
type TFieldTokensScope = Record<TFieldName, FieldTokenModel[]>;
type TFieldTokens = TFieldTokensArr | TFieldTokensScope;
interface ITruthyEvaluationResult {
    evaluationResult: true;
    triggeredFieldTokens: Set<FieldTokenModel>;
}
type TEvaluationResult = ITruthyEvaluationResult | null;
export declare class EvaluateConditionVisitor extends T6TriggerVisitor {
    private fieldTokensScope;
    evaluationResult: boolean;
    triggeredFieldTokens: FieldTokenModel[] | null;
    constructor(fieldTokens: TFieldTokens);
    private setFieldTokensScope;
    private checkFieldType;
    private getRelevantFieldTokens;
    private getConditionValue;
    private truthifyResult;
    private dateTimeValueParse;
    private dateTimeValueConverter;
    private compare;
    private isTruthy;
    private isTokenValueEmpty;
    private isTokenValuesEqual;
    private isArray;
    private isArraysEqual;
    private isNumeric;
    private isString;
    private isEnumList;
    visitParse(ctx: ParseCtx): void;
    visitBinaryExpr(ctx: BinaryExprCtx): ITruthyEvaluationResult | null;
    visitComparatorExpr(ctx: ComparatorExprCtx): TEvaluationResult;
    visitAnyExpr(ctx: AnyExprCtx): TEvaluationResult;
    visitEmptyExpr(ctx: EmptyExprCtx): TEvaluationResult;
    visitNumberExpr(ctx: NumberExprCtx): TEvaluationResult;
    visitNumbersExpr(ctx: NumbersExprCtx): TEvaluationResult;
    visitNotExpr(ctx: NotExprCtx): TEvaluationResult;
    visitComplexExpr(ctx: ComplexExprCtx): TEvaluationResult;
    visitCountExpr(ctx: CountExprCtx): TEvaluationResult;
    visitCountComplexExpr(ctx: CountComplexExprCtx): ITruthyEvaluationResult | null;
    visitParenExpr(ctx: ParenExprCtx): TEvaluationResult;
    visitVehicleImpactExpr(ctx: VehicleImpactExprCtx): TEvaluationResult;
    visitValueExpr(ctx: ValueExprCtx): TEvaluationResult;
    visitValuesExpr(ctx: ValuesExprCtx): TEvaluationResult;
}
export {};
//# sourceMappingURL=EvaluateConditionVisitor.d.ts.map