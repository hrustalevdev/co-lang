import { nanoid } from 'nanoid';
import { CoLang, FieldTokenModel } from '..';
import { EFieldType } from '../types';

interface ITestSetup<T = unknown> extends ICreateFieldTokenModels<T> {
  isPositive: boolean;
  testName: string;
  condition: string;
  fieldName: string;
  fieldValue?: T;
  fieldType: EFieldType;
  children?: ICreateFieldTokenModels[];
  fieldName2?: string;
  fieldValue2?: T;
  fieldType2?: EFieldType;
  children2?: ICreateFieldTokenModels[];
  fieldName3?: string;
  fieldValue3?: T;
  fieldType3?: EFieldType;
  children3?: ICreateFieldTokenModels[];
  fieldName4?: string;
  fieldValue4?: T;
  fieldType4?: EFieldType;
  children4?: ICreateFieldTokenModels[];
}

type TTestSetupButch = Record<string, ITestSetup[]>;

interface ICreateFieldTokenModels<T = unknown> {
  fieldName: string;
  fieldValue?: T;
  fieldType: EFieldType;
  children?: ICreateFieldTokenModels[];
}

const createFieldTokenModels = (
  ...input: ICreateFieldTokenModels[]
): FieldTokenModel[] => {
  return input.map((i) => {
    const parentId = nanoid();
    const childId = nanoid();
    return new FieldTokenModel(
      parentId,
      i.fieldName,
      i.fieldValue,
      i.fieldType,
      i.children?.map((ch) => {
        return new FieldTokenModel(
          childId,
          ch.fieldName,
          ch.fieldValue,
          ch.fieldType,
          [],
        ) as FieldTokenModel;
      }),
    ) as FieldTokenModel;
  });
};

describe('Test "evaluateCondition()" method', () => {
  const conditionLanguage = new CoLang();
  evaluateConditionTest(conditionLanguage);
})

export function evaluateConditionTest(conditionLanguage: CoLang) {
  describe('Test "evaluateCondition()" method of Condition language', () => {
    const WRONG_VALUE = 'WRONG_VALUE';

    const baseTest = (args: ITestSetup, paren: boolean = false) => {
      test(`${args.testName}`, () => {
        const fieldTokens = createFieldTokenModels(
          {
            fieldName: args.fieldName,
            fieldValue: args.fieldValue,
            fieldType: args.fieldType
          },
          {
            fieldName: args.fieldName2!,
            fieldValue: args.fieldValue2,
            fieldType: args.fieldType2!
          }
        );

        const evalReport = conditionLanguage.evaluateFieldTokens(args.condition, fieldTokens);

        const isTriggeredTokens = (
          triggeredTokens: FieldTokenModel[] | null
        ): triggeredTokens is FieldTokenModel[] => {
          return !!triggeredTokens;
        };

        let evalRes: boolean = false;
        let triggeredTokensSize = 0;
        let isMatchingIds: boolean = false;

        if (evalReport) {
          const {evaluationResult, triggeredFieldTokens} = evalReport;
          evalRes = args.isPositive ? evaluationResult : !evaluationResult;

          if (isTriggeredTokens(triggeredFieldTokens) && paren) {
            triggeredTokensSize = triggeredFieldTokens.length;
            // prettier-ignore
            isMatchingIds = triggeredFieldTokens[0].id === fieldTokens[0].id &&
              triggeredFieldTokens[1].id === fieldTokens[1].id;
          } else if (isTriggeredTokens(triggeredFieldTokens)) {
            triggeredTokensSize = triggeredFieldTokens.length;
            isMatchingIds = triggeredFieldTokens[0].id === fieldTokens[0].id;
          } else {
            isMatchingIds = triggeredFieldTokens === null;
          }
        }

        expect(evalRes).toBeTruthy();
        expect(triggeredTokensSize).toBe(args.isPositive && paren ? 2 : args.isPositive ? 1 : 0);
        expect(isMatchingIds).toBeTruthy();
      });
    };

    describe('Test BinaryExpr', () => {
      const binaryExprTest = (args: ITestSetup, operator: 'OR' | 'AND' = 'OR') => {
        test(`${args.testName}`, () => {
          const condition = args.condition;
          const fieldTokens = createFieldTokenModels(
            {
              fieldName: args.fieldName,
              fieldValue: args.fieldValue,
              fieldType: args.fieldType
            },
            {
              fieldName: args.fieldName2!,
              fieldValue: args.fieldValue2,
              fieldType: args.fieldType2!
            }
          );

          const evalReport = conditionLanguage.evaluateFieldTokens(condition, fieldTokens);

          const isTriggeredTokens = (
            triggeredTokens: FieldTokenModel[] | null
          ): triggeredTokens is FieldTokenModel[] => {
            return !!triggeredTokens;
          };

          let evalRes = false;
          let triggeredTokensSize = 0;
          let isMatchingIds: boolean = false;

          if (evalReport) {
            const {evaluationResult, triggeredFieldTokens} = evalReport;
            evalRes = args.isPositive ? evaluationResult : !evaluationResult;

            if (isTriggeredTokens(triggeredFieldTokens)) {
              if (
                operator === 'OR' &&
                (args.fieldValue === WRONG_VALUE || args.fieldValue2 === WRONG_VALUE)
              ) {
                triggeredTokensSize = triggeredFieldTokens.length;
              } else if (operator === 'OR') {
                triggeredTokensSize = triggeredFieldTokens.length;
              }

              if (operator === 'AND') triggeredTokensSize = triggeredFieldTokens.length;

              if (operator === 'OR' && args.fieldValue === WRONG_VALUE) {
                isMatchingIds = triggeredFieldTokens[0].id === fieldTokens[1].id;
              } else if (operator === 'OR' && args.fieldValue2 === WRONG_VALUE) {
                isMatchingIds = triggeredFieldTokens[0].id === fieldTokens[0].id;
              } else if (operator === 'OR') {
                // prettier-ignore
                isMatchingIds = triggeredFieldTokens[0].id === fieldTokens[0].id &&
                  triggeredFieldTokens[1].id === fieldTokens[1].id;
              }

              if (operator === 'AND') {
                // prettier-ignore
                isMatchingIds = triggeredFieldTokens[0].id === fieldTokens[0].id &&
                  triggeredFieldTokens[1].id === fieldTokens[1].id;
              }
            } else {
              isMatchingIds = triggeredFieldTokens === null;
            }
          }

          expect(evalRes).toBeTruthy();
          expect(triggeredTokensSize).toBe(
            args.isPositive
              ? (operator === 'OR' && args.fieldValue === WRONG_VALUE) ||
              args.fieldValue2 === WRONG_VALUE
                ? 1
                : operator === 'OR'
                  ? 2
                  : 2
              : 0
          );
          expect(isMatchingIds).toBeTruthy();
        });
      };

      const orCondition = `$IF Obesity $FROM Obstruction $THEN $OR $IF Ordered $FROM CTA $THEN`;
      const andCondition = `$IF Obesity $FROM Obstruction $THEN $AND $IF Ordered $FROM CTA $THEN`;
      const testSetup: TTestSetupButch = {
        OR: [
          {
            isPositive: true,
            testName: 'Returns TRUE if only left expression returns TRUE',
            condition: orCondition,
            fieldName: 'Obstruction',
            fieldValue: 'Obesity',
            fieldType: EFieldType.enum,
            fieldName2: 'CTA',
            fieldValue2: WRONG_VALUE,
            fieldType2: EFieldType.enum
          },
          {
            isPositive: true,
            testName: 'Returns TRUE if only right expression returns TRUE',
            condition: orCondition,
            fieldName: 'Obstruction',
            fieldValue: WRONG_VALUE,
            fieldType: EFieldType.enum,
            fieldName2: 'CTA',
            fieldValue2: 'Ordered',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: true,
            testName: 'Returns TRUE if both expressions return TRUE',
            condition: orCondition,
            fieldName: 'Obstruction',
            fieldValue: 'Obesity',
            fieldType: EFieldType.enum,
            fieldName2: 'CTA',
            fieldValue2: 'Ordered',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if both expressions return FALSE',
            condition: orCondition,
            fieldName: 'Obstruction',
            fieldValue: WRONG_VALUE,
            fieldType: EFieldType.enum,
            fieldName2: 'CTA',
            fieldValue2: WRONG_VALUE,
            fieldType2: EFieldType.enum,
          },
        ],
        AND: [
          {
            isPositive: true,
            testName: 'Returns TRUE if both expressions return TRUE',
            condition: andCondition,
            fieldName: 'Obstruction',
            fieldValue: 'Obesity',
            fieldType: EFieldType.enum,
            fieldName2: 'CTA',
            fieldValue2: 'Ordered',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if only lift expression returns FALSE',
            condition: andCondition,
            fieldName: 'Obstruction',
            fieldValue: WRONG_VALUE,
            fieldType: EFieldType.enum,
            fieldName2: 'CTA',
            fieldValue2: 'Ordered',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if only right expression return FALSE',
            condition: andCondition,
            fieldName: 'Obstruction',
            fieldValue: 'Obesity',
            fieldType: EFieldType.enum,
            fieldName2: 'CTA',
            fieldValue2: WRONG_VALUE,
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if both expressions return FALSE',
            condition: andCondition,
            fieldName: 'Obstruction',
            fieldValue: WRONG_VALUE,
            fieldType: EFieldType.enum,
            fieldName2: 'CTA',
            fieldValue2: WRONG_VALUE,
            fieldType2: EFieldType.enum,
          },
        ],
      };

      describe('OR', () => {
        testSetup.OR.forEach((or) => binaryExprTest(or, 'OR'));
      });

      describe('AND', () => {
        testSetup.AND.forEach((and) => binaryExprTest(and, 'AND'));
      });

      test('HARD', () => {
        // prettier-ignore
        const hardCondition = '(($IF $EMPTY $FROM AgeInYears $THEN $AND $IF <=90 $FROM SceneBloodPressureSystolic $THEN) $OR ($IF >=16 $FROM AgeInYears $THEN $AND $IF <=90 $FROM SceneBloodPressureSystolic $THEN) $OR ($IF $EMPTY $FROM AgeInYears $THEN $AND $IF <=90 $FROM BloodPressureSystolic $THEN) $OR ($IF >16 $FROM AgeInYears $THEN $AND $IF <=90 $FROM BloodPressureSystolic $THEN) $OR ($IF NO $FROM PeripheralPulseIsPalpable $THEN) $OR ($IF $EMPTY $FROM AgeInYears $THEN $AND $IF >100 $FROM SceneHeartRate $THEN) $OR ($IF >=16 $FROM AgeInYears $THEN $AND $IF >100 $FROM SceneHeartRate $THEN) $OR ($IF $EMPTY $FROM AgeInYears $THEN $AND $IF >100 $FROM HeartRate $THEN) $OR ($IF >=16 $FROM AgeInYears $THEN $AND $IF >100 $FROM HeartRate $THEN) $OR $IF <=-3 $FROM ArterialBloodGasBaseDeficit $THEN $OR $IF >3 $FROM ArterialBloodGasLactate $THEN ) $OR ( $IF <16 $FROM AgeInYears $THEN $AND ( $IF None = 1,Incomp = 2,Inapprop = 3,Confused = 4 $FROM SceneVerbalResponse $THEN $OR ($IF None = 1 $FROM SceneVerbalResponsePeds $THEN $OR $IF Moans to Pain = 2 $FROM SceneVerbalResponsePeds $THEN $OR $IF Cries to Pain = 3 $FROM SceneVerbalResponsePeds $THEN $OR $IF Irritable; Cries = 4 $FROM SceneVerbalResponsePeds $THEN) $OR $IF None = 1,Incomp = 2,Inapprop = 3,Confused = 4 $FROM VerbalResponse $THEN $OR ($IF None = 1 $FROM VerbalResponsePeds $THEN $OR $IF Moans to Pain = 2 $FROM VerbalResponsePeds $THEN $OR $IF Cries to Pain = 3 $FROM VerbalResponsePeds $THEN $OR $IF Irritable; Cries = 4 $FROM VerbalResponsePeds $THEN) $OR $IF None = 1,To Pain = 2 $FROM SceneEyeResponse $THEN $OR $IF None = 1,To Pain = 2 $FROM EyeResponse $THEN $OR $IF <35 $FROM Temp $THEN $OR $IF <35 $FROM SceneTemp $THEN $OR ($IF <=3M $FROM Age $THEN $AND $IF <60 $FROM BloodPressureSystolic $THEN) $OR ($IF <=3M $FROM Age $THEN $AND $IF <60 $FROM SceneBloodPressureSystolic $THEN) $OR ($IF <=1y $FROM Age $THEN $AND $IF >3M $FROM Age $THEN $AND $IF <80 $FROM SceneBloodPressureSystolic $THEN) $OR ($IF <=1y $FROM Age $THEN $AND $IF >3M $FROM Age $THEN $AND $IF <80 $FROM BloodPressureSystolic $THEN) $OR ($IF >1 $FROM AgeInYears $THEN $AND $IF <=90 $FROM SceneBloodPressureSystolic $THEN) $OR ($IF >1 $FROM AgeInYears $THEN $AND $IF <=90 $FROM BloodPressureSystolic $THEN) $OR $IF >1.6 $FROM ArterialBloodGasLactate $THEN $OR ( $IF <20 $FROM ArterialBloodGasHCO3 $THEN $AND $IF <7.3 $FROM ArterialBloodGasPh $THEN ))) $OR (( $IF None = 1,Incomp = 2,Inapprop = 3,Confused = 4 $FROM SceneVerbalResponse $THEN $OR ($IF None = 1 $FROM SceneVerbalResponsePeds $THEN $OR $IF Moans to Pain = 2 $FROM SceneVerbalResponsePeds $THEN $OR $IF Cries to Pain = 3 $FROM SceneVerbalResponsePeds $THEN $OR $IF Irritable; Cries = 4 $FROM SceneVerbalResponsePeds $THEN) $OR $IF None = 1,Incomp = 2,Inapprop = 3,Confused = 4 $FROM VerbalResponse $THEN $OR ($IF None = 1 $FROM VerbalResponsePeds $THEN $OR $IF Moans to Pain = 2 $FROM VerbalResponsePeds $THEN $OR $IF Cries to Pain = 3 $FROM VerbalResponsePeds $THEN $OR $IF Irritable; Cries = 4 $FROM VerbalResponsePeds $THEN) $OR $IF None = 1,To Pain = 2 $FROM SceneEyeResponse $THEN $OR $IF None = 1,To Pain = 2 $FROM EyeResponse $THEN $OR $IF <35 $FROM Temp $THEN $OR $IF <35 $FROM SceneTemp $THEN $OR ($IF <=3M $FROM Age $THEN $AND $IF <60 $FROM BloodPressureSystolic $THEN) $OR ($IF <=3M $FROM Age $THEN $AND $IF <60 $FROM SceneBloodPressureSystolic $THEN) $OR ($IF <=1y $FROM Age $THEN $AND $IF >3M $FROM Age $THEN $AND $IF <80 $FROM SceneBloodPressureSystolic $THEN) $OR ($IF <=1y $FROM Age $THEN $AND $IF >3M $FROM Age $THEN $AND $IF <80 $FROM BloodPressureSystolic $THEN) $OR ($IF >1 $FROM AgeInYears $THEN $AND $IF <=90 $FROM SceneBloodPressureSystolic $THEN) $OR ($IF >1 $FROM AgeInYears $THEN $AND $IF <=90 $FROM BloodPressureSystolic $THEN) $OR $IF >1.6 $FROM ArterialBloodGasLactate $THEN $OR ( $IF <20 $FROM ArterialBloodGasHCO3 $THEN $AND $IF <7.3 $FROM ArterialBloodGasPh $THEN )) $AND (( $IF > 2 sec $FROM CapillaryRefill $THEN $OR $IF COLD $FROM SkinTemperature $THEN $OR $IF Flushed,Cyanotic,Mottled $FROM SkinColor $THEN $OR ($IF <=3M $FROM Age $THEN $AND $IF >180 $FROM SceneHeartRate $THEN) $OR ($IF <=2y $FROM Age $THEN $AND $IF >3M $FROM Age $THEN) $AND $IF >160 $FROM SceneHeartRate $THEN $OR ($IF <16 $FROM AgeInYears $THEN $AND $IF >=2 $FROM AgeInYears $THEN $AND $IF >140 $FROM SceneHeartRate $THEN) $OR ($IF <=3M $FROM Age $THEN $AND $IF >180 $FROM HeartRate $THEN) $OR ($IF <=2y $FROM Age $THEN $AND $IF >3M $FROM Age $THEN) $AND $IF >160 $FROM HeartRate $THEN $OR ($IF <16 $FROM AgeInYears $THEN $AND $IF >=2 $FROM AgeInYears $THEN $AND $IF >140 $FROM HeartRate $THEN) $OR ($IF <1 $FROM AgeInYears $THEN $AND $IF >60 $FROM SceneRespiratoryRate $THEN) $OR ($IF <=3 $FROM AgeInYears $THEN $AND $IF >=1 $FROM AgeInYears $THEN $AND $IF >40 $FROM SceneRespiratoryRate $THEN) $OR ($IF <=5 $FROM AgeInYears $THEN $AND $IF >=4 $FROM AgeInYears $THEN $AND $IF >34 $FROM SceneRespiratoryRate $THEN) $OR ($IF <=12 $FROM AgeInYears $THEN $AND $IF >=6 $FROM AgeInYears $THEN $AND $IF >40 $FROM SceneRespiratoryRate $THEN) $OR ($IF <=18 $FROM AgeInYears $THEN $AND $IF >=13 $FROM AgeInYears $THEN $AND $IF >40 $FROM SceneRespiratoryRate $THEN) $OR ($IF <1 $FROM AgeInYears $THEN $AND $IF >60 $FROM RespiratoryRate $THEN) $OR ($IF <=3 $FROM AgeInYears $THEN $AND $IF >=1 $FROM AgeInYears $THEN $AND $IF >40 $FROM RespiratoryRate $THEN) $OR ($IF <=5 $FROM AgeInYears $THEN $AND $IF >=4 $FROM AgeInYears $THEN $AND $IF >34 $FROM RespiratoryRate $THEN) $OR ($IF <=12 $FROM AgeInYears $THEN $AND $IF >=6 $FROM AgeInYears $THEN $AND $IF >40 $FROM RespiratoryRate $THEN) $OR ($IF <=18 $FROM AgeInYears $THEN $AND $IF >=13 $FROM AgeInYears $THEN $AND $IF >40 $FROM RespiratoryRate $THEN) ) $AND $IF <16 $FROM AgeInYears $THEN )) $OR $IF YES $FROM SignsofUncontrolledExternalHemorrhage $THEN $OR $IF $ANY $FROM CovidFoleyCatheterIndications $THEN $OR $IF Definitive Airway $FROM AirwayInterventions $THEN $OR $IF $ANY $FROM VasoactiveInfusions $THEN $OR $IF >500 $FROM CovidFoleyBladderScan $THEN';
        const rest: ICreateFieldTokenModels[] = [
          {
            fieldName: 'Age',
            fieldValue: '17y',
            fieldType: EFieldType.string,
          },
          {
            fieldName: 'AgeInYears',
            fieldValue: 17,
            fieldType: EFieldType.integer,
          },
          {
            fieldName: 'AirwayInterventions',
            fieldValue: 'Definitive Airway',
            fieldType: EFieldType.enum,
          },
          {
            fieldName: 'ArterialBloodGasBaseDeficit',
            fieldValue: -4,
            fieldType: EFieldType.integer,
          },
          {
            fieldName: 'ArterialBloodGasHCO3',
            fieldValue: 19,
            fieldType: EFieldType.integer,
          },
          {
            fieldName: 'ArterialBloodGasPh',
            fieldValue: 7.2,
            fieldType: EFieldType.decimal,
          },
          {
            fieldName: 'ArterialBloodGasLactate',
            fieldValue: 1.7,
            fieldType: EFieldType.decimal,
          },
          {
            fieldName: 'BloodPressureSystolic',
            fieldValue: 89,
            fieldType: EFieldType.integer,
          },
          {
            fieldName: 'CapillaryRefill',
            fieldValue: '> 2 sec',
            fieldType: EFieldType.enum,
          },
          {
            fieldName: 'CovidFoleyCatheterIndications',
            fieldValue: ['Retention'],
            fieldType: EFieldType.enum_list,
          },
          {
            fieldName: 'EyeResponse',
            fieldValue: 'To Pain = 2',
            fieldType: EFieldType.enum,
          },
          {
            fieldName: 'HeartRate',
            fieldValue: 110,
            fieldType: EFieldType.integer,
          },
          {
            fieldName: 'PeripheralPulseIsPalpable',
            fieldValue: 'NO',
            fieldType: EFieldType.string,
          },
          {
            fieldName: 'RespiratoryRate',
            fieldValue: 45,
            fieldType: EFieldType.integer,
          },
          {
            fieldName: 'SceneBloodPressureSystolic',
            fieldValue: 85,
            fieldType: EFieldType.integer,
          },
          {
            fieldName: 'SceneEyeResponse',
            fieldValue: 'None = 1',
            fieldType: EFieldType.enum,
          },
          {
            fieldName: 'SceneHeartRate',
            fieldValue: 165,
            fieldType: EFieldType.integer,
          },
          {
            fieldName: 'SceneRespiratoryRate',
            fieldValue: 60,
            fieldType: EFieldType.integer,
          },
          {
            fieldName: 'SceneTemp',
            fieldValue: 34.5,
            fieldType: EFieldType.decimal,
          },
          {
            fieldName: 'SceneVerbalResponse',
            fieldValue: 'Inapprop = 3',
            fieldType: EFieldType.enum,
          },
          {
            fieldName: 'SignsofUncontrolledExternalHemorrhage',
            fieldValue: 'YES',
            fieldType: EFieldType.string,
          },
          {
            fieldName: 'SkinColor',
            fieldValue: ['Flushed', 'Cyanotic'],
            fieldType: EFieldType.enum_list,
          },
          {
            fieldName: 'SkinTemperature',
            fieldValue: 'COLD',
            fieldType: EFieldType.enum,
          },
          {
            fieldName: 'Temp',
            fieldValue: 34.5,
            fieldType: EFieldType.decimal,
          },
          {
            fieldName: 'VasoactiveInfusions',
            fieldValue: 'Dopamine',
            fieldType: EFieldType.enum,
          },
          {
            fieldName: 'VerbalResponse',
            fieldValue: 'Confused = 4',
            fieldType: EFieldType.enum,
          },
        ];

        const fieldTokens = createFieldTokenModels(...rest);

        const evalReport = conditionLanguage.evaluateFieldTokens(hardCondition, fieldTokens);

        let evalRes = false;
        let isMatchingIds = false;

        if (evalReport) {
          const {evaluationResult, triggeredFieldTokens} = evalReport;
          evalRes = evaluationResult;
          const tokens = triggeredFieldTokens!;
          isMatchingIds = tokens[0].id === fieldTokens[1].id &&
            tokens[1].id === fieldTokens[14].id &&
            tokens[2].id === fieldTokens[7].id &&
            tokens[3].id === fieldTokens[12].id &&
            tokens[4].id === fieldTokens[16].id &&
            tokens[5].id === fieldTokens[11].id &&
            tokens[6].id === fieldTokens[3].id &&
            tokens[7].id === fieldTokens[20].id &&
            tokens[8].id === fieldTokens[9].id &&
            tokens[9].id === fieldTokens[2].id &&
            tokens[10].id === fieldTokens[24].id
        }

        expect(evalRes).toBeTruthy();
        expect(isMatchingIds).toBeTruthy();
      });
    });

    describe('Test ComparatorExpr', () => {
      const testSetupNumber: TTestSetupButch = {
        GT: [
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is greater than condition value',
            condition: '$IF >16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 20,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is not greater than condition value',
            condition: '$IF >16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 10,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is slightly greater than condition value',
            condition: '$IF >16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 17,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is slightly less or equal to the condition value',
            condition: '$IF >16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 16,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
        ],
        GE: [
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is greater or equal to the condition value',
            condition: '$IF >=16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 20,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is not greater or equal to the condition value',
            condition: '$IF >=16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 10,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is slightly grater or equal to the condition value',
            condition: '$IF >=16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 16,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is slightly less than condition value',
            condition: '$IF >=16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 15,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
        ],
        LT: [
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is less than condition value',
            condition: '$IF <16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 10,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is not less than condition value',
            condition: '$IF <16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 20,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is slightly less than condition value',
            condition: '$IF <16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 15,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName:
              'Returns FALSE if fieldValue is slightly greater or equal to the condition value',
            condition: '$IF <16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 16,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
        ],
        LE: [
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is less or equal to the condition value',
            condition: '$IF <=16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 10,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is not less or equal to the condition value',
            condition: '$IF <=16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 20,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
          },
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is slightly less or equal to the condition value',
            condition: '$IF <=16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 16,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is slightly greater than condition value',
            condition: '$IF <=16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 17,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
        ],
        EQ: [
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is equal to the condition value',
            condition: '$IF =16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 16,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is not equal to the condition value',
            condition: '$IF =16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 20,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is slightly less than condition value',
            condition: '$IF =16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 15,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is slightly greater than condition value',
            condition: '$IF =16 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 17,
            fieldType: EFieldType.integer,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
        ],
      };
      const testSetupDateTime: TTestSetupButch = {
        GT: [
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is greater than condition value',
            condition: '$IF >10d $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '1 months',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is not greater than condition value',
            condition: '$IF >10d $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '5 days',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is slightly greater than condition value',
            condition: '$IF >10d $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '11 days',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is slightly less or equal to the condition value',
            condition: '$IF >10d $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '10 days',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
        ],
        GE: [
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is greater or equal to the condition value',
            condition: '$IF >=5M $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '1 years',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is not greater or equal to the condition value',
            condition: '$IF >=5M $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '1 days',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is slightly grater or equal to the condition value',
            condition: '$IF >=5M $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '5 months',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is slightly less than condition value',
            condition: '$IF >=5M $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '149 days',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
        ],
        LT: [
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is less than condition value',
            condition: '$IF <5y $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '12 months',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is not less than condition value',
            condition: '$IF <5y $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '10 years',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is slightly less than condition value',
            condition: '$IF <5y $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '1799 days',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName:
              'Returns FALSE if fieldValue is slightly greater or equal to the condition value',
            condition: '$IF <5y $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '60 months',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
        ],
        LE: [
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is less or equal to the condition value',
            condition: '$IF <=5y $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '10 months',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is not less or equal to the condition value',
            condition: '$IF <=5y $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '3600 days',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is slightly less or equal to the condition value',
            condition: '$IF <=5y $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '5 years',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is slightly greater than condition value',
            condition: '$IF <=5y $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '61 months',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
        ],
        EQ: [
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is equal to the condition value',
            condition: '$IF =5d $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '5 days',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is not equal to the condition value',
            condition: '$IF =5d $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '1 months',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is slightly less than condition value',
            condition: '$IF =5d $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '4 days',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is slightly greater than condition value',
            condition: '$IF =5d $FROM Age $THEN',
            fieldName: 'Age',
            fieldValue: '6 days',
            fieldType: EFieldType.string,
            fieldName2: 'Temp',
            fieldValue2: 36.6,
            fieldType2: EFieldType.decimal,
          },
        ],
      };

      describe('number', () => {
        describe('GT', () => {
          testSetupNumber.GT.forEach((el) => baseTest(el));
        });

        describe('GE', () => {
          testSetupNumber.GE.forEach((el) => baseTest(el));
        });

        describe('LT', () => {
          testSetupNumber.LT.forEach((el) => baseTest(el));
        });

        describe('LE', () => {
          testSetupNumber.LE.forEach((el) => baseTest(el));
        });

        describe('EQ', () => {
          testSetupNumber.EQ.forEach((el) => baseTest(el));
        });
      });

      describe('dateTime', () => {
        describe('GT', () => {
          testSetupDateTime.GT.forEach((el) => baseTest(el));
        });

        describe('GE', () => {
          testSetupDateTime.GE.forEach((el) => baseTest(el));
        });

        describe('LT', () => {
          testSetupDateTime.LT.forEach((el) => baseTest(el));
        });

        describe('LE', () => {
          testSetupDateTime.LE.forEach((el) => baseTest(el));
        });

        describe('EQ', () => {
          testSetupDateTime.EQ.forEach((el) => baseTest(el));
        });
      });
    });

    describe('Test AnyExpr', () => {
      const testSetupAny: ITestSetup[] = [
        {
          isPositive: true,
          testName: 'Returns TRUE if fieldValue is any value but not empty',
          condition: '$IF $ANY $FROM CTA $THEN',
          fieldName: 'CTA',
          fieldValue: 'some value',
          fieldType: EFieldType.enum,
          fieldName2: 'Temp',
          fieldValue2: 36.6,
          fieldType2: EFieldType.decimal
        },
        {
          isPositive: false,
          testName: 'Returns FALSE if fieldValue is empty',
          condition: '$IF $ANY $FROM CTA $THEN',
          fieldName: 'CTA',
          fieldValue: '',
          fieldType: EFieldType.enum,
          fieldName2: 'Temp',
          fieldValue2: 36.6,
          fieldType2: EFieldType.decimal,
        },
      ];

      testSetupAny.forEach((el) => baseTest(el));
    });

    describe('Test EmptyExpr', () => {
      const testSetupEmpty: ITestSetup[] = [
        {
          isPositive: true,
          testName: 'Returns TRUE if fieldValue is empty',
          condition: '$IF $EMPTY $FROM CTA $THEN',
          fieldName: 'CTA',
          fieldValue: '',
          fieldType: EFieldType.enum,
          fieldName2: 'Obstruction',
          fieldValue2: 'Facial Trauma',
          fieldType2: EFieldType.enum,
        },
        {
          isPositive: false,
          testName: 'Returns FALSE if fieldValue is any value but not empty',
          condition: '$IF $EMPTY $FROM CTA $THEN',
          fieldName: 'CTA',
          fieldValue: 'some value',
          fieldType: EFieldType.enum,
          fieldName2: 'Obstruction',
          fieldValue2: 'Facial Trauma',
          fieldType2: EFieldType.enum,
        },
      ];

      testSetupEmpty.forEach((el) => baseTest(el));

      test('Returns TRUE if fieldToken is not exist', () => {
        const condition = '$IF $EMPTY $FROM AgeInYears $THEN';
        const fieldTokens = createFieldTokenModels({
          fieldName: 'Obstruction',
          fieldValue: 'Facial Trauma',
          fieldType: EFieldType.enum,
        });

        const evalReport = conditionLanguage.evaluateFieldTokens(condition, fieldTokens);

        let evalRes: boolean = false;
        let triggeredTokensSize = 0;

        if (evalReport) {
          const {evaluationResult, triggeredFieldTokens} = evalReport;
          evalRes = evaluationResult;
          triggeredTokensSize = triggeredFieldTokens!.length;
        }

        expect(evalRes).toBeTruthy();
        expect(triggeredTokensSize).toBe(0);
      });

      test('Returns TRUE if array with fieldTokens is empty', () => {
        const condition = '$IF $EMPTY $FROM AgeInYears $THEN';

        const evalReport = conditionLanguage.evaluateFieldTokens(condition, []);

        let evalRes: boolean = false;
        let triggeredTokensSize = 0;

        if (evalReport) {
          const { evaluationResult, triggeredFieldTokens } = evalReport;
          evalRes = evaluationResult;
          triggeredTokensSize = triggeredFieldTokens!.length;
        }

        expect(evalRes).toBeTruthy();
        expect(triggeredTokensSize).toBe(0);
      });
    });

    describe('Test NumberExpr', () => {
      const testSetupNumber: TTestSetupButch = {
        AIS: [
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is equal the number value from condition',
            condition: '$IF 854001.3 $FROM AISSelection $THEN',
            fieldName: 'AISSelection',
            fieldValue: '854001.3',
            fieldType: EFieldType.ais,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is not equal the number value from condition',
            condition: '$IF 854001.3 $FROM AISSelection $THEN',
            fieldName: 'AISSelection',
            fieldValue: '123456.7',
            fieldType: EFieldType.ais,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
        ],
        INT: [
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is equal the number value from condition',
            condition: '$IF 20 $FROM CovidCaseDay $THEN',
            fieldName: 'CovidCaseDay',
            fieldValue: 20,
            fieldType: EFieldType.integer,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is not equal the number value from condition',
            condition: '$IF 20 $FROM CovidCaseDay $THEN',
            fieldName: 'CovidCaseDay',
            fieldValue: 21,
            fieldType: EFieldType.integer,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
        ],
        DECIMAL: [
          {
            isPositive: true,
            testName: 'Returns TRUE if fieldValue is equal the number value from condition',
            condition: '$IF 36.6 $FROM SceneTemp $THEN',
            fieldName: 'SceneTemp',
            fieldValue: 36.6,
            fieldType: EFieldType.decimal,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if fieldValue is not equal the number value from condition',
            condition: '$IF 36.6 $FROM SceneTemp $THEN',
            fieldName: 'SceneTemp',
            fieldValue: 36.61,
            fieldType: EFieldType.decimal,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
        ],
      };

      describe('AIS', () => {
        testSetupNumber.AIS.forEach((el) => baseTest(el));
      });

      describe('INT', () => {
        testSetupNumber.INT.forEach((el) => baseTest(el));
      });

      describe('DECIMAL', () => {
        testSetupNumber.DECIMAL.forEach((el) => baseTest(el));
      });
    });

    describe('Test NumbersExpr', () => {
      const testSetupNumbers: TTestSetupButch = {
        AIS: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the fieldValue is equal to any number from the condition',
            condition: '$IF 854001.3,854112.3,854152.3,854182.3,854172.3 $FROM AISSelection $THEN',
            fieldName: 'AISSelection',
            fieldValue: '854152.3',
            fieldType: EFieldType.ais,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if the fieldValue is not equal to any number from the condition',
            condition: '$IF 854001.3,854112.3,854152.3,854182.3,854172.3 $FROM AISSelection $THEN',
            fieldName: 'AISSelection',
            fieldValue: '123456.7',
            fieldType: EFieldType.ais,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
          },
        ],
        INT: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the fieldValue is equal to any number from the condition',
            condition: '$IF 14, 18, 20 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 20,
            fieldType: EFieldType.integer,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if the fieldValue is not equal to any number from the condition',
            condition: '$IF 14, 18, 20 $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 21,
            fieldType: EFieldType.integer,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
        ],
        DECIMAL: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the fieldValue is equal to any number from the condition',
            condition: '$IF 36.6, 36.7, 37.1 $FROM Temp $THEN',
            fieldName: 'Temp',
            fieldValue: 36.6,
            fieldType: EFieldType.decimal,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if the fieldValue is not equal to any number from the condition',
            condition: '$IF 36.6, 36.7, 37.1 $FROM Temp $THEN',
            fieldName: 'Temp',
            fieldValue: 38.1,
            fieldType: EFieldType.decimal,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
        ],
      };

      describe('AIS', () => {
        testSetupNumbers.AIS.forEach((el) => baseTest(el));
      });

      describe('INT', () => {
        testSetupNumbers.INT.forEach((el) => baseTest(el));
      });

      describe('DECIMAL', () => {
        testSetupNumbers.DECIMAL.forEach((el) => baseTest(el));
      });
    });

    describe('Test NotExpr', () => {
      const testSetupNot: TTestSetupButch = {
        numberAIS: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the fieldValue is not equal to number from the condition',
            condition: '$IF $NOT(854001.3) $FROM AISSelection $THEN',
            fieldName: 'AISSelection',
            fieldValue: '854001.5',
            fieldType: EFieldType.ais,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if the fieldValue is equal to number from the condition',
            condition: '$IF $NOT(854001.3) $FROM AISSelection $THEN',
            fieldName: 'AISSelection',
            fieldValue: '854001.3',
            fieldType: EFieldType.ais,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
        ],
        numbersAIS: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the fieldValue is not equal to any number from the condition',
            condition: '$IF $NOT(854001.3,854112.3,854152.3,854182.3) $FROM AISSelection $THEN',
            fieldName: 'AISSelection',
            fieldValue: '123456.5',
            fieldType: EFieldType.ais,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if the fieldValue is equal to some number from the condition',
            condition: '$IF $NOT(854001.3,854112.3,854152.3,854182.3) $FROM AISSelection $THEN',
            fieldName: 'AISSelection',
            fieldValue: '854152.3',
            fieldType: EFieldType.ais,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
        ],
        numberINT: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the fieldValue is not equal to number from the condition',
            condition: '$IF $NOT(21) $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 18,
            fieldType: EFieldType.integer,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if the fieldValue is equal to number from the condition',
            condition: '$IF $NOT(21) $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 21,
            fieldType: EFieldType.integer,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
        ],
        numbersINT: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the fieldValue is not equal to any number from the condition',
            condition: '$IF $NOT(21, 22, 23) $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 18,
            fieldType: EFieldType.integer,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if the fieldValue is equal to some number from the condition',
            condition: '$IF $NOT(21, 22, 23) $FROM AgeInYears $THEN',
            fieldName: 'AgeInYears',
            fieldValue: 22,
            fieldType: EFieldType.integer,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
        ],
        numberDECIMAL: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the fieldValue is not equal to number from the condition',
            condition: '$IF $NOT(36.6) $FROM Temp $THEN',
            fieldName: 'Temp',
            fieldValue: 36,
            fieldType: EFieldType.integer,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if the fieldValue is equal to number from the condition',
            condition: '$IF $NOT(36.6) $FROM Temp $THEN',
            fieldName: 'Temp',
            fieldValue: 36.6,
            fieldType: EFieldType.decimal,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
        ],
        numbersDECIMAL: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the fieldValue is not equal to any number from the condition',
            condition: '$IF $NOT(36.6, 36.7, 38.1) $FROM Temp $THEN',
            fieldName: 'Temp',
            fieldValue: 36.5,
            fieldType: EFieldType.decimal,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if the fieldValue is equal to some number from the condition',
            condition: '$IF $NOT(36.6, 36.7, 38.1) $FROM Temp $THEN',
            fieldName: 'Temp',
            fieldValue: 36.7,
            fieldType: EFieldType.decimal,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
        ],
        value: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the fieldValue is not equal to value from the condition',
            condition: '$IF $NOT(Incomp = 2) $FROM VerbalResponse $THEN',
            fieldName: 'VerbalResponse',
            fieldValue: 'some value',
            fieldType: EFieldType.enum,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if the fieldValue is equal to value from the condition',
            condition: '$IF $NOT(Incomp = 2) $FROM VerbalResponse $THEN',
            fieldName: 'VerbalResponse',
            fieldValue: 'Incomp = 2',
            fieldType: EFieldType.enum,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
        ],
        values: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the fieldValue is not equal to any value from the condition',
            condition:
              '$IF $NOT(None = 1,Incomp = 2,Inapprop = 3,Confused = 4) $FROM VerbalResponse $THEN',
            fieldName: 'VerbalResponse',
            fieldValue: 'some value',
            fieldType: EFieldType.enum,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if the fieldValue is equal to some value from the condition',
            condition:
              '$IF $NOT(None = 1,Incomp = 2,Inapprop = 3,Confused = 4) $FROM VerbalResponse $THEN',
            fieldName: 'VerbalResponse',
            fieldValue: 'Incomp = 2',
            fieldType: EFieldType.enum,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
        ],
        valuesListToValue: [
          {
            isPositive: true,
            testName: 'Returns TRUE if every fieldValues is not equal to value from the condition',
            condition: '$IF $NOT(Cyanotic) $FROM SkinColor $THEN',
            fieldName: 'SkinColor',
            fieldValue: ['Flushed', 'Mottled'],
            fieldType: EFieldType.enum_list,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if any of fieldValues is equal to value from the condition',
            condition: '$IF $NOT(Cyanotic) $FROM SkinColor $THEN',
            fieldName: 'SkinColor',
            fieldValue: ['Flushed', 'Cyanotic', 'Mottled'],
            fieldType: EFieldType.enum_list,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
        ],
        valuesListToValues: [
          {
            isPositive: true,
            testName: 'Returns TRUE if every fieldValues is not equal to value from the condition',
            condition: '$IF $NOT(Cyanotic, red, black) $FROM SkinColor $THEN',
            fieldName: 'SkinColor',
            fieldValue: ['Flushed', 'Mottled'],
            fieldType: EFieldType.enum_list,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if any of fieldValues is equal to value from the condition',
            condition: '$IF $NOT(Cyanotic, red, black) $FROM SkinColor $THEN',
            fieldName: 'SkinColor',
            fieldValue: ['Flushed', 'Red', 'Mottled'],
            fieldType: EFieldType.enum_list,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
        ],
      };

      describe('Number', () => {
        describe('AIS', () => {
          testSetupNot.numberAIS.forEach((el) => {
            baseTest(el);
          });
        });

        describe('INT', () => {
          testSetupNot.numberINT.forEach((el) => {
            baseTest(el);
          });
        });

        describe('DECIMAL', () => {
          testSetupNot.numberDECIMAL.forEach((el) => {
            baseTest(el);
          });
        });
      });

      describe('Numbers', () => {
        describe('AIS', () => {
          testSetupNot.numbersAIS.forEach((el) => {
            baseTest(el);
          });
        });

        describe('INT', () => {
          testSetupNot.numbersINT.forEach((el) => {
            baseTest(el);
          });
        });

        describe('DECIMAL', () => {
          testSetupNot.numbersDECIMAL.forEach((el) => {
            baseTest(el);
          });
        });
      });

      describe('Value', () => {
        describe('enum', () => {
          testSetupNot.value.forEach((el) => {
            baseTest(el);
          });
        });

        describe('enum_list', () => {
          testSetupNot.valuesListToValue.forEach((el) => {
            baseTest(el);
          });
        });
      });

      describe('Values', () => {
        describe('enum', () => {
          testSetupNot.values.forEach((el) => {
            baseTest(el);
          });
        });

        describe('enum_list', () => {
          testSetupNot.valuesListToValues.forEach((el) => {
            baseTest(el);
          });
        });
      });
    });

    describe('Test ComplexExpr', () => {
      const testSetupComplex: TTestSetupButch = {
        valueExpr: [
          {
            isPositive: true,
            testName: 'Returns TRUE if inner expression returns true',
            condition: '$IF $COMPLEX($IF Facial Trauma $FROM Obstruction $THEN) $FROM CTA $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'AISSelection',
            fieldValue2: '854001.5',
            fieldType2: EFieldType.ais,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if inner expression returns false',
            condition: '$IF $COMPLEX($IF Facial Trauma $FROM Obstruction $THEN) $FROM CTA $THEN',
            fieldName: 'Obstruction',
            fieldValue: WRONG_VALUE,
            fieldType: EFieldType.enum,
            fieldName2: 'AISSelection',
            fieldValue2: '854001.5',
            fieldType2: EFieldType.ais,
          },
        ],
      };

      testSetupComplex.valueExpr.forEach((el) => {
        baseTest(el);
      });
    });

    describe('Test CountExpr', () => {
      const countTest = (args: ITestSetup) => {
        test(`${args.testName}`, () => {
          const fieldTokens = createFieldTokenModels(
            {
              fieldName: args.fieldName,
              fieldValue: args.fieldValue,
              fieldType: args.fieldType,
            },
            {
              fieldName: args.fieldName2!,
              fieldValue: args.fieldValue2,
              fieldType: args.fieldType2!,
            },
            {
              fieldName: args.fieldName3!,
              fieldValue: args.fieldValue3,
              fieldType: args.fieldType3!,
            },
            {
              fieldName: args.fieldName4!,
              fieldValue: args.fieldValue4,
              fieldType: args.fieldType4!,
            }
          );

          const evalReport = conditionLanguage.evaluateFieldTokens(args.condition, fieldTokens);

          const isTriggeredTokens = (
            triggeredTokens: FieldTokenModel[] | null
          ): triggeredTokens is FieldTokenModel[] => {
            return !!triggeredTokens;
          };

          let evalRes = false;
          let triggeredTokensSize = 0;
          let isMatchingIds: boolean = false;

          if (evalReport) {
            const {evaluationResult, triggeredFieldTokens} = evalReport;
            evalRes = args.isPositive ? evaluationResult : !evaluationResult;

            if (isTriggeredTokens(triggeredFieldTokens)) {
              triggeredTokensSize = triggeredFieldTokens.length;
              isMatchingIds = triggeredFieldTokens[0].id === fieldTokens[1].id &&
                triggeredFieldTokens[1].id === fieldTokens[3].id;
            } else {
              isMatchingIds = triggeredFieldTokens === null;
            }
          }

          expect(evalRes).toBeTruthy();
          expect(triggeredTokensSize).toBe(args.isPositive ? 2 : 0);
          expect(isMatchingIds).toBeTruthy();
        });
      };

      const testSetupNOTdistinct: TTestSetupButch = {
        GT: [
          {
            isPositive: true,
            testName: 'Returns TRUE if count of "MISTInjuryType" fields with fieldValue "GSW" is greater than 1',
            condition: '$IF $COUNT(GSW)>1 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'MISTInjuryType',
            fieldValue2: 'GSW',
            fieldType2: EFieldType.enum,
            fieldName3: 'MISTInjuryType',
            fieldValue3: 'Bubbling',
            fieldType3: EFieldType.enum,
            fieldName4: 'MISTInjuryType',
            fieldValue4: 'GSW',
            fieldType4: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if count of "MISTInjuryType" fields with fieldValue "GSW" is not greater than 1',
            condition: '$IF $COUNT(GSW)>1 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'MISTInjuryType',
            fieldValue2: 'GSW',
            fieldType2: EFieldType.enum,
            fieldName3: 'MISTInjuryType',
            fieldValue3: 'Bubbling',
            fieldType3: EFieldType.enum,
            fieldName4: 'MISTInjuryType',
            fieldValue4: 'Bubbling',
            fieldType4: EFieldType.enum,
          },
        ],
        GE: [
          {
            isPositive: true,
            testName: 'Returns TRUE if count of "MISTInjuryType" fields with fieldValue "GSW" is greater or equal to 1',
            condition: '$IF $COUNT(GSW)>=1 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'MISTInjuryType',
            fieldValue2: 'GSW',
            fieldType2: EFieldType.enum,
            fieldName3: 'MISTInjuryType',
            fieldValue3: 'Bubbling',
            fieldType3: EFieldType.enum,
            fieldName4: 'MISTInjuryType',
            fieldValue4: 'GSW',
            fieldType4: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if count of "MISTInjuryType" fields with fieldValue "GSW" is less than 2',
            condition: '$IF $COUNT(GSW)>=2 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'MISTInjuryType',
            fieldValue2: 'GSW',
            fieldType2: EFieldType.enum,
            fieldName3: 'MISTInjuryType',
            fieldValue3: 'Bubbling',
            fieldType3: EFieldType.enum,
            fieldName4: 'MISTInjuryType',
            fieldValue4: 'Bubbling',
            fieldType4: EFieldType.enum,
          },
        ],
        LT: [
          {
            isPositive: true,
            testName: 'Returns TRUE if count of "MISTInjuryType" fields with fieldValue "GSW" is less than 3',
            condition: '$IF $COUNT(GSW)<3 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'MISTInjuryType',
            fieldValue2: 'GSW',
            fieldType2: EFieldType.enum,
            fieldName3: 'MISTInjuryType',
            fieldValue3: 'Bubbling',
            fieldType3: EFieldType.enum,
            fieldName4: 'MISTInjuryType',
            fieldValue4: 'GSW',
            fieldType4: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if count of "MISTInjuryType" fields with fieldValue "GSW" is not less than 1',
            condition: '$IF $COUNT(GSW)<1 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'MISTInjuryType',
            fieldValue2: 'GSW',
            fieldType2: EFieldType.enum,
            fieldName3: 'MISTInjuryType',
            fieldValue3: 'Bubbling',
            fieldType3: EFieldType.enum,
            fieldName4: 'MISTInjuryType',
            fieldValue4: 'Bubbling',
            fieldType4: EFieldType.enum,
          },
        ],
        LE: [
          {
            isPositive: true,
            testName: 'Returns TRUE if count of "MISTInjuryType" fields with fieldValue "GSW" is less or equal to 2',
            condition: '$IF $COUNT(GSW)<=2 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'MISTInjuryType',
            fieldValue2: 'GSW',
            fieldType2: EFieldType.enum,
            fieldName3: 'MISTInjuryType',
            fieldValue3: 'Bubbling',
            fieldType3: EFieldType.enum,
            fieldName4: 'MISTInjuryType',
            fieldValue4: 'GSW',
            fieldType4: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if count of "MISTInjuryType" fields with fieldValue "GSW" is grater than 2',
            condition: '$IF $COUNT(GSW)<=2 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'MISTInjuryType',
            fieldValue2: 'GSW',
            fieldType2: EFieldType.enum,
            fieldName3: 'MISTInjuryType',
            fieldValue3: 'GSW',
            fieldType3: EFieldType.enum,
            fieldName4: 'MISTInjuryType',
            fieldValue4: 'GSW',
            fieldType4: EFieldType.enum,
          },
        ],
        EQ: [
          {
            isPositive: true,
            testName: 'Returns TRUE if count of "MISTInjuryType" fields with fieldValue "GSW" is equal to 2',
            condition: '$IF $COUNT(GSW)=2 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'MISTInjuryType',
            fieldValue2: 'GSW',
            fieldType2: EFieldType.enum,
            fieldName3: 'MISTInjuryType',
            fieldValue3: 'Bubbling',
            fieldType3: EFieldType.enum,
            fieldName4: 'MISTInjuryType',
            fieldValue4: 'GSW',
            fieldType4: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if count of "MISTInjuryType" fields with fieldValue "GSW" is not equal to 2',
            condition: '$IF $COUNT(GSW)=2 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'MISTInjuryType',
            fieldValue2: 'GSW',
            fieldType2: EFieldType.enum,
            fieldName3: 'MISTInjuryType',
            fieldValue3: 'GSW',
            fieldType3: EFieldType.enum,
            fieldName4: 'MISTInjuryType',
            fieldValue4: 'GSW',
            fieldType4: EFieldType.enum,
          },
        ],
      };

      const testSetupDISTINCT: TTestSetupButch = {
        GT: [
          {
            isPositive: true,
            testName: 'Returns TRUE if count of "MISTInjuryType" fields with unique values is greater than 1',
            condition: '$IF $COUNT($DISTINCT)>1 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'MISTInjuryType',
            fieldValue2: '2° Burn',
            fieldType2: EFieldType.enum,
            fieldName3: 'MISTInjuryType',
            fieldValue3: '2° Burn',
            fieldType3: EFieldType.enum,
            fieldName4: 'MISTInjuryType',
            fieldValue4: 'Crush',
            fieldType4: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if count of "MISTInjuryType" fields with unique values is not greater than 1',
            condition: '$IF $COUNT($DISTINCT)>1 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'MISTInjuryType',
            fieldValue2: '2° Burn',
            fieldType2: EFieldType.enum,
            fieldName3: 'MISTInjuryType',
            fieldValue3: '2° Burn',
            fieldType3: EFieldType.enum,
            fieldName4: 'AgeInYears',
            fieldValue4: 20,
            fieldType4: EFieldType.integer,
          },
        ],
        GE: [
          {
            isPositive: true,
            testName: 'Returns TRUE if count of "MISTInjuryType" fields with unique values is greater or equal to 1',
            condition: '$IF $COUNT($DISTINCT)>=1 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'MISTInjuryType',
            fieldValue2: '2° Burn',
            fieldType2: EFieldType.enum,
            fieldName3: 'MISTInjuryType',
            fieldValue3: '2° Burn',
            fieldType3: EFieldType.enum,
            fieldName4: 'MISTInjuryType',
            fieldValue4: 'Crush',
            fieldType4: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if count of "MISTInjuryType" fields with unique values is not greater or equal to 2',
            condition: '$IF $COUNT($DISTINCT)>=2 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'MISTInjuryType',
            fieldValue2: '2° Burn',
            fieldType2: EFieldType.enum,
            fieldName3: 'MISTInjuryType',
            fieldValue3: '2° Burn',
            fieldType3: EFieldType.enum,
            fieldName4: 'AgeInYears',
            fieldValue4: 20,
            fieldType4: EFieldType.integer,
          },
        ],
        LT: [
          {
            isPositive: true,
            testName: 'Returns TRUE if count of "MISTInjuryType" fields with unique values is less than 3',
            condition: '$IF $COUNT($DISTINCT)<3 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'MISTInjuryType',
            fieldValue2: '2° Burn',
            fieldType2: EFieldType.enum,
            fieldName3: 'MISTInjuryType',
            fieldValue3: '2° Burn',
            fieldType3: EFieldType.enum,
            fieldName4: 'MISTInjuryType',
            fieldValue4: 'Crush',
            fieldType4: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if count of "MISTInjuryType" fields with unique values is not less than 1',
            condition: '$IF $COUNT($DISTINCT)<1 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'MISTInjuryType',
            fieldValue2: '2° Burn',
            fieldType2: EFieldType.enum,
            fieldName3: 'MISTInjuryType',
            fieldValue3: '2° Burn',
            fieldType3: EFieldType.enum,
            fieldName4: 'AgeInYears',
            fieldValue4: 20,
            fieldType4: EFieldType.integer,
          },
        ],
        LE: [
          {
            isPositive: true,
            testName: 'Returns TRUE if count of "MISTInjuryType" fields with unique values is less or equal to 2',
            condition: '$IF $COUNT($DISTINCT)<=2 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'MISTInjuryType',
            fieldValue2: '2° Burn',
            fieldType2: EFieldType.enum,
            fieldName3: 'MISTInjuryType',
            fieldValue3: '2° Burn',
            fieldType3: EFieldType.enum,
            fieldName4: 'MISTInjuryType',
            fieldValue4: 'Crush',
            fieldType4: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if count of "MISTInjuryType" fields with unique values is not less or equal to 1',
            condition: '$IF $COUNT($DISTINCT)<=1 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
            fieldName3: 'AgeInYears',
            fieldValue3: 20,
            fieldType3: EFieldType.integer,
            fieldName4: 'AgeInYears',
            fieldValue4: 20,
            fieldType4: EFieldType.integer,
          },
        ],
        EQ: [
          {
            isPositive: true,
            testName: 'Returns TRUE if count of "MISTInjuryType" fields with unique values is equal to 2',
            condition: '$IF $COUNT($DISTINCT)=2 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'MISTInjuryType',
            fieldValue2: '2° Burn',
            fieldType2: EFieldType.enum,
            fieldName3: 'MISTInjuryType',
            fieldValue3: '2° Burn',
            fieldType3: EFieldType.enum,
            fieldName4: 'MISTInjuryType',
            fieldValue4: 'Crush',
            fieldType4: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if count of "MISTInjuryType" fields with unique values is not equal to 1',
            condition: '$IF $COUNT($DISTINCT)=1 $FROM MISTInjuryType $THEN',
            fieldName: 'Obstruction',
            fieldValue: 'Facial Trauma',
            fieldType: EFieldType.enum,
            fieldName2: 'MISTInjuryType',
            fieldValue2: '2° Burn',
            fieldType2: EFieldType.enum,
            fieldName3: 'MISTInjuryType',
            fieldValue3: '2° Burn',
            fieldType3: EFieldType.enum,
            fieldName4: 'MISTInjuryType',
            fieldValue4: 'Crush',
            fieldType4: EFieldType.enum,
          },
        ],
      };

      describe('NOT distinct', () => {
        describe('GT', () => {
          testSetupNOTdistinct.GT.forEach((el) => {
            countTest(el);
          });
        });

        describe('GE', () => {
          testSetupNOTdistinct.GE.forEach((el) => {
            countTest(el);
          });
        });

        describe('LT', () => {
          testSetupNOTdistinct.LT.forEach((el) => {
            countTest(el);
          });
        });

        describe('LE', () => {
          testSetupNOTdistinct.LE.forEach((el) => {
            countTest(el);
          });
        });

        describe('EQ', () => {
          testSetupNOTdistinct.EQ.forEach((el) => {
            countTest(el);
          });
        });
      });

      describe('DISTINCT', () => {
        describe('GT', () => {
          testSetupDISTINCT.GT.forEach((el) => {
            countTest(el);
          });
        });

        describe('GE', () => {
          testSetupDISTINCT.GE.forEach((el) => {
            countTest(el);
          });
        });

        describe('LT', () => {
          testSetupDISTINCT.LT.forEach((el) => {
            countTest(el);
          });
        });

        describe('LE', () => {
          testSetupDISTINCT.LE.forEach((el) => {
            countTest(el);
          });
        });

        describe('EQ', () => {
          testSetupDISTINCT.EQ.forEach((el) => {
            countTest(el);
          });
        });
      });
    });

    describe('Test CountComplexExpr', () => {
      /**
       * The expression in parentheses uses only the child elements of the complex field of the main expression.
       * Ex.: Parent: MISTInjury -> Child: MISTInjuryType
       */
      const countComplexTest = (args: ITestSetup, distinct: boolean = false) => {
        test(`${args.testName}`, () => {
          const fieldTokens = createFieldTokenModels(
            {
              fieldName: args.fieldName,
              fieldType: args.fieldType,
              children: args.children,
            },
            {
              fieldName: args.fieldName2!,
              fieldType: args.fieldType2!,
              children: args.children2,
            },
            {
              fieldName: args.fieldName3!,
              fieldType: args.fieldType3!,
              children: args.children3,
            }
          );

          const evalReport = conditionLanguage.evaluateFieldTokens(args.condition, fieldTokens);

          const isTriggeredTokens = (
            triggeredTokens: FieldTokenModel[] | null
          ): triggeredTokens is FieldTokenModel[] => {
            return !!triggeredTokens;
          };

          let evalRes = false;
          let triggeredTokensSize = 0;
          let isMatchingIds: boolean = false;

          if (evalReport) {
            const {evaluationResult, triggeredFieldTokens} = evalReport;
            evalRes = args.isPositive ? evaluationResult : !evaluationResult;

            if (isTriggeredTokens(triggeredFieldTokens) && distinct) {
              triggeredTokensSize = triggeredFieldTokens.length;
              // prettier-ignore
              isMatchingIds = triggeredFieldTokens[0].id === fieldTokens[0].children[0].id &&
                triggeredFieldTokens[1].id === fieldTokens[0].children[1].id &&
                triggeredFieldTokens[2].id === fieldTokens[0].children[2].id &&
                triggeredFieldTokens[3].id === fieldTokens[2].children[1].id &&
                triggeredFieldTokens[4].id === fieldTokens[2].children[2].id
            } else if (isTriggeredTokens(triggeredFieldTokens)) {
              triggeredTokensSize = triggeredFieldTokens.length;
              // prettier-ignore
              isMatchingIds = triggeredFieldTokens[0].id === fieldTokens[0].children[0].id &&
                triggeredFieldTokens[1].id === fieldTokens[2].children[0].id;
            } else {
              isMatchingIds = triggeredFieldTokens === null;
            }
          }

          expect(evalRes).toBeTruthy();
          expect(triggeredTokensSize).toBe(args.isPositive && distinct ? 5 : args.isPositive ? 2 : 0);
          expect(isMatchingIds).toBeTruthy();
        });
      };

      const testSetupNOTdistinct: TTestSetupButch = {
        GT: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the number of parent fields that returned TRUE for the expression in parentheses is greater than 1',
            condition: '$IF $COUNT_COMPLEX($IF Abscess, Bubbling $FROM MISTInjuryType $THEN)>1 $FROM MISTInjury $THEN',
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Abscess',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Face',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: '3° Burn',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Neck',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Bubbling',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
            ],
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if the number of parent fields that returned TRUE for the expression in parentheses is less or equal to 1',
            condition: '$IF $COUNT_COMPLEX($IF Abscess, Bubbling $FROM MISTInjuryType $THEN)>1 $FROM MISTInjury $THEN',
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Deformity',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Face',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: '3° Burn',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Neck',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Crepitus',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
            ],
          },
        ],
        GE: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the number of parent fields that returned TRUE for the expression in parentheses is greater or equal to 1',
            condition: '$IF $COUNT_COMPLEX($IF Abscess, Bubbling $FROM MISTInjuryType $THEN)>=1 $FROM MISTInjury $THEN',
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Abscess',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Face',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: '3° Burn',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Neck',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Bubbling',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
            ],
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if the number of parent fields that returned TRUE for the expression in parentheses is less than 1',
            condition: '$IF $COUNT_COMPLEX($IF Abscess, Bubbling $FROM MISTInjuryType $THEN)>=1 $FROM MISTInjury $THEN',
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Deformity',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Face',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: '3° Burn',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Neck',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Crepitus',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
            ],
          },
        ],
        LT: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the number of parent fields that returned TRUE for the expression in parentheses is less than 3',
            condition: '$IF $COUNT_COMPLEX($IF Abscess, Bubbling $FROM MISTInjuryType $THEN)<3 $FROM MISTInjury $THEN',
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Abscess',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Face',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: '3° Burn',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Neck',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Bubbling',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
            ],
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if the number of parent fields that returned TRUE for the expression in parentheses is greater or equal to 1',
            condition: '$IF $COUNT_COMPLEX($IF Abscess, Bubbling $FROM MISTInjuryType $THEN)<1 $FROM MISTInjury $THEN',
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Deformity',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Face',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Bubbling',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Neck',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Crepitus',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
            ],
          },
        ],
        LE: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the number of parent fields that returned TRUE for the expression in parentheses is less or equal to 2',
            condition: '$IF $COUNT_COMPLEX($IF Abscess, Bubbling $FROM MISTInjuryType $THEN)<=2 $FROM MISTInjury $THEN',
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Abscess',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Face',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: '3° Burn',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Neck',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Bubbling',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
            ],
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if the number of parent fields that returned TRUE for the expression in parentheses is greater than 1',
            condition: '$IF $COUNT_COMPLEX($IF Abscess, Bubbling $FROM MISTInjuryType $THEN)<=1 $FROM MISTInjury $THEN',
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Deformity',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Face',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Bubbling',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Neck',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Abscess',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
            ],
          },
        ],
        EQ: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the number of parent fields that returned TRUE for the expression in parentheses is equal to 2',
            condition: '$IF $COUNT_COMPLEX($IF Abscess, Bubbling $FROM MISTInjuryType $THEN)=2 $FROM MISTInjury $THEN',
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Abscess',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Face',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: '3° Burn',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Neck',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Bubbling',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
            ],
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if the number of parent fields that returned TRUE for the expression in parentheses is not equal to 1',
            condition: '$IF $COUNT_COMPLEX($IF Abscess, Bubbling $FROM MISTInjuryType $THEN)=1 $FROM MISTInjury $THEN',
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Deformity',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Face',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Bubbling',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Neck',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Abscess',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
            ],
          },
        ],
      };

      const testSetupDISTINCT: TTestSetupButch = {
        GT: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the number of parent fields with unique values of DISTINCT field that returned TRUE for the expression in parentheses is grater than 1',
            condition: `
            $IF $COUNT_COMPLEX(
              $DISTINCT MISTInjuryLocation
              $IF Abscess, Bubbling, 3° Burn $FROM MISTInjuryType $THEN
                $OR
              $IF Face, Chest, Abdomen, Right Foot $FROM MISTInjuryLocation $THEN
                $AND
              $IF Front, Back $FROM MISTInjurySide $THEN
            )>1 $FROM MISTInjury $THEN`,
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Bubbling',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Front',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Abscess',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Back',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: WRONG_VALUE,
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Chest',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Back',
                fieldType: EFieldType.enum,
              },
            ],
          },
          {
            isPositive: false,
            testName:
              'Returns FALSE if the number of parent fields with unique values of DISTINCT field that returned TRUE for the expression in parentheses is not grater than 1',
            condition: `
            $IF $COUNT_COMPLEX(
              $DISTINCT MISTInjuryLocation
              $IF Abscess, Bubbling, 3° Burn $FROM MISTInjuryType $THEN
                $OR
              $IF Face, Chest, Abdomen, Right Foot $FROM MISTInjuryLocation $THEN
                $AND
              $IF Front, Back $FROM MISTInjurySide $THEN
            )>1 $FROM MISTInjury $THEN`,
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Bubbling',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Front',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Abscess',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Back',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: WRONG_VALUE,
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Back',
                fieldType: EFieldType.enum,
              },
            ],
          },
        ],
        GE: [
          {
            isPositive: true,
            testName:
              'Returns TRUE if the number of parent fields with unique values of DISTINCT field that returned TRUE for the expression in parentheses is grater or equal to 2',
            condition: `
            $IF $COUNT_COMPLEX(
              $DISTINCT MISTInjuryLocation
              $IF Abscess, Bubbling, 3° Burn $FROM MISTInjuryType $THEN
                $OR
              $IF Face, Chest, Abdomen, Right Foot $FROM MISTInjuryLocation $THEN
                $AND
              $IF Front, Back $FROM MISTInjurySide $THEN
            )>=2 $FROM MISTInjury $THEN`,
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Bubbling',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Front',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Abscess',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Back',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: WRONG_VALUE,
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Chest',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Back',
                fieldType: EFieldType.enum,
              },
            ],
          },
          {
            isPositive: false,
            testName:
              'Returns FALSE if the number of parent fields with unique values of DISTINCT field that returned TRUE for the expression in parentheses is not grater or equal to 2',
            condition: `
            $IF $COUNT_COMPLEX(
              $DISTINCT MISTInjuryLocation
              $IF Abscess, Bubbling, 3° Burn $FROM MISTInjuryType $THEN
                $OR
              $IF Face, Chest, Abdomen, Right Foot $FROM MISTInjuryLocation $THEN
                $AND
              $IF Front, Back $FROM MISTInjurySide $THEN
            )>=2 $FROM MISTInjury $THEN`,
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Bubbling',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Front',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Abscess',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Back',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: WRONG_VALUE,
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Back',
                fieldType: EFieldType.enum,
              },
            ],
          },
        ],
        LT: [
          {
            isPositive: true,
            testName:
              'Returns TRUE if the number of parent fields with unique values of DISTINCT field that returned TRUE for the expression in parentheses is less than 3',
            condition: `
            $IF $COUNT_COMPLEX(
              $DISTINCT MISTInjuryLocation
              $IF Abscess, Bubbling, 3° Burn $FROM MISTInjuryType $THEN
                $OR
              $IF Face, Chest, Abdomen, Right Foot $FROM MISTInjuryLocation $THEN
                $AND
              $IF Front, Back $FROM MISTInjurySide $THEN
            )<3 $FROM MISTInjury $THEN`,
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Bubbling',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Front',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Abscess',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Back',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: WRONG_VALUE,
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Chest',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Back',
                fieldType: EFieldType.enum,
              },
            ],
          },
          {
            isPositive: false,
            testName:
              'Returns FALSE if the number of parent fields with unique values of DISTINCT field that returned TRUE for the expression in parentheses is not less than 3',
            condition: `
            $IF $COUNT_COMPLEX(
              $DISTINCT MISTInjuryLocation
              $IF Abscess, Bubbling, 3° Burn $FROM MISTInjuryType $THEN
                $OR
              $IF Face, Chest, Abdomen, Right Foot $FROM MISTInjuryLocation $THEN
                $AND
              $IF Front, Back $FROM MISTInjurySide $THEN
            )<3 $FROM MISTInjury $THEN`,
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Abscess',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Face',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Front',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Bubbling',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Chest',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Back',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: '3° Burn',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Abdomen',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Front',
                fieldType: EFieldType.enum,
              },
            ],
          },
        ],
        LE: [
          {
            isPositive: true,
            testName:
              'Returns TRUE if the number of parent fields with unique values of DISTINCT field that returned TRUE for the expression in parentheses is less or equal to 2',
            condition: `
            $IF $COUNT_COMPLEX(
              $DISTINCT MISTInjuryLocation
              $IF Abscess, Bubbling, 3° Burn $FROM MISTInjuryType $THEN
                $OR
              $IF Face, Chest, Abdomen, Right Foot $FROM MISTInjuryLocation $THEN
                $AND
              $IF Front, Back $FROM MISTInjurySide $THEN
            )<=2 $FROM MISTInjury $THEN`,
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Bubbling',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Front',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Abscess',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Back',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: WRONG_VALUE,
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Chest',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Back',
                fieldType: EFieldType.enum,
              },
            ],
          },
          {
            isPositive: false,
            testName:
              'Returns FALSE if the number of parent fields with unique values of DISTINCT field that returned TRUE for the expression in parentheses is not less or equal to 2',
            condition: `
            $IF $COUNT_COMPLEX(
              $DISTINCT MISTInjuryLocation
              $IF Abscess, Bubbling, 3° Burn $FROM MISTInjuryType $THEN
                $OR
              $IF Face, Chest, Abdomen, Right Foot $FROM MISTInjuryLocation $THEN
                $AND
              $IF Front, Back $FROM MISTInjurySide $THEN
            )<=2 $FROM MISTInjury $THEN`,
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Abscess',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Face',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Front',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Bubbling',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Chest',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Back',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: '3° Burn',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Abdomen',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Front',
                fieldType: EFieldType.enum,
              },
            ],
          },
        ],
        EQ: [
          {
            isPositive: true,
            testName:
              'Returns TRUE if the number of parent fields with unique values of DISTINCT field that returned TRUE for the expression in parentheses is equal to 2',
            condition: `
            $IF $COUNT_COMPLEX(
              $DISTINCT MISTInjuryLocation
              $IF Abscess, Bubbling, 3° Burn $FROM MISTInjuryType $THEN
                $OR
              $IF Face, Chest, Abdomen, Right Foot $FROM MISTInjuryLocation $THEN
                $AND
              $IF Front, Back $FROM MISTInjurySide $THEN
            )=2 $FROM MISTInjury $THEN`,
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Bubbling',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Front',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Abscess',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Right Foot',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Back',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: WRONG_VALUE,
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Chest',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Back',
                fieldType: EFieldType.enum,
              },
            ],
          },
          {
            isPositive: false,
            testName:
              'Returns FALSE if the number of parent fields with unique values of DISTINCT field that returned TRUE for the expression in parentheses is not equal to 2',
            condition: `
            $IF $COUNT_COMPLEX(
              $DISTINCT MISTInjuryLocation
              $IF Abscess, Bubbling, 3° Burn $FROM MISTInjuryType $THEN
                $OR
              $IF Face, Chest, Abdomen, Right Foot $FROM MISTInjuryLocation $THEN
                $AND
              $IF Front, Back $FROM MISTInjurySide $THEN
            )=2 $FROM MISTInjury $THEN`,
            fieldName: 'MISTInjury',
            fieldType: EFieldType.complex,
            children: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Abscess',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Face',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Front',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName2: 'MISTInjury',
            fieldType2: EFieldType.complex,
            children2: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: 'Bubbling',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Chest',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Back',
                fieldType: EFieldType.enum,
              },
            ],
            fieldName3: 'MISTInjury',
            fieldType3: EFieldType.complex,
            children3: [
              {
                fieldName: 'MISTInjuryType',
                fieldValue: '3° Burn',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjuryLocation',
                fieldValue: 'Abdomen',
                fieldType: EFieldType.enum,
              },
              {
                fieldName: 'MISTInjurySide',
                fieldValue: 'Front',
                fieldType: EFieldType.enum,
              },
            ],
          },
        ],
      };

      describe('NOT distinct', () => {
        describe('GT', () => {
          testSetupNOTdistinct.GT.forEach((el) => {
            countComplexTest(el);
          });
        });

        describe('GE', () => {
          testSetupNOTdistinct.GE.forEach((el) => {
            countComplexTest(el);
          });
        });

        describe('LT', () => {
          testSetupNOTdistinct.LT.forEach((el) => {
            countComplexTest(el);
          });
        });

        describe('LE', () => {
          testSetupNOTdistinct.LE.forEach((el) => {
            countComplexTest(el);
          });
        });

        describe('EQ', () => {
          testSetupNOTdistinct.EQ.forEach((el) => {
            countComplexTest(el);
          });
        });
      });

      describe('DISTINCT', () => {
        describe('GT', () => {
          testSetupDISTINCT.GT.forEach((el) => {
            countComplexTest(el, true);
          });
        });

        describe('GE', () => {
          testSetupDISTINCT.GE.forEach((el) => {
            countComplexTest(el, true);
          });
        });

        describe('LT', () => {
          testSetupDISTINCT.LT.forEach((el) => {
            countComplexTest(el, true);
          });
        });

        describe('LE', () => {
          testSetupDISTINCT.LE.forEach((el) => {
            countComplexTest(el, true);
          });
        });

        describe('EQ', () => {
          testSetupDISTINCT.EQ.forEach((el) => {
            countComplexTest(el, true);
          });
        });
      });

      describe('DISTINCT_EXTRA', () => {
        test('DISTINCT_VAR_I', () => {
          const condition = `
        $IF $COUNT_COMPLEX(
          $DISTINCT MISTInjuryType
          $IF Abscess, Bubbling $FROM MISTInjuryType $THEN
        )>1 $FROM MISTInjury $THEN`;

          const fieldTokens = createFieldTokenModels(
            {
              fieldName: 'MISTInjury',
              fieldType: EFieldType.complex,
              children: [
                {
                  fieldName: 'MISTInjuryType',
                  fieldValue: 'Abscess',
                  fieldType: EFieldType.enum,
                },
              ],
            },
            {
              fieldName: 'MISTInjury',
              fieldType: EFieldType.complex,
              children: [
                {
                  fieldName: 'MISTInjuryType',
                  fieldValue: 'Bubbling',
                  fieldType: EFieldType.enum,
                },
              ],
            },
            {
              fieldName: 'MISTInjury',
              fieldType: EFieldType.complex,
              children: [
                {
                  fieldName: 'MISTInjuryType',
                  fieldValue: 'Abscess',
                  fieldType: EFieldType.enum,
                },
              ],
            }
          );

          const evalReport = conditionLanguage.evaluateFieldTokens(condition, fieldTokens);

          expect(evalReport?.evaluationResult).toBeTruthy();
        });

        test('DISTINCT_VAR_II', () => {
          const condition = `
        $IF $COUNT_COMPLEX(
          $DISTINCT MISTInjuryLocation
          $IF Abscess, Bubbling $FROM MISTInjuryType $THEN
            $OR
          $IF Face, Chest $FROM MISTInjuryLocation $THEN
        )>1 $FROM MISTInjury $THEN`;

          const fieldTokens = createFieldTokenModels(
            {
              fieldName: 'MISTInjury',
              fieldType: EFieldType.complex,
              children: [
                {
                  fieldName: 'MISTInjuryType',
                  fieldValue: 'Abscess',
                  fieldType: EFieldType.enum,
                },
                {
                  fieldName: 'MISTInjuryLocation',
                  fieldValue: 'Face',
                  fieldType: EFieldType.enum,
                },
              ],
            },
            {
              fieldName: 'MISTInjury',
              fieldType: EFieldType.complex,
              children: [
                {
                  fieldName: 'MISTInjuryType',
                  fieldValue: 'WRONG_VALUE',
                  fieldType: EFieldType.enum,
                },
                {
                  fieldName: 'MISTInjuryLocation',
                  fieldValue: 'Chest',
                  fieldType: EFieldType.enum,
                },
              ],
            },
            {
              fieldName: 'MISTInjury',
              fieldType: EFieldType.complex,
              children: [
                {
                  fieldName: 'MISTInjuryType',
                  fieldValue: 'WRONG_VALUE',
                  fieldType: EFieldType.enum,
                },
                {
                  fieldName: 'MISTInjuryLocation',
                  fieldValue: 'Face',
                  fieldType: EFieldType.enum,
                },
              ],
            }
          );

          const evalReport = conditionLanguage.evaluateFieldTokens(condition, fieldTokens);

          expect(evalReport?.evaluationResult).toBeTruthy();
        });

        test('DISTINCT_VAR_III', () => {
          const condition = `
        $IF $COUNT_COMPLEX(
          $DISTINCT MISTInjuryLocation
          $IF Abscess, Bubbling $FROM MISTInjuryType $THEN
            $AND
          $IF Face, Chest $FROM MISTInjuryLocation $THEN
        )>1 $FROM MISTInjury $THEN`;

          const fieldTokens = createFieldTokenModels(
            {
              fieldName: 'MISTInjury',
              fieldType: EFieldType.complex,
              children: [
                {
                  fieldName: 'MISTInjuryType',
                  fieldValue: 'Abscess',
                  fieldType: EFieldType.enum,
                },
                {
                  fieldName: 'MISTInjuryLocation',
                  fieldValue: 'Face',
                  fieldType: EFieldType.enum,
                },
              ],
            },
            {
              fieldName: 'MISTInjury',
              fieldType: EFieldType.complex,
              children: [
                {
                  fieldName: 'MISTInjuryType',
                  fieldValue: 'Abscess',
                  fieldType: EFieldType.enum,
                },
                {
                  fieldName: 'MISTInjuryLocation',
                  fieldValue: 'Chest',
                  fieldType: EFieldType.enum,
                },
              ],
            },
            {
              fieldName: 'MISTInjury',
              fieldType: EFieldType.complex,
              children: [
                {
                  fieldName: 'MISTInjuryType',
                  fieldValue: 'Bubbling',
                  fieldType: EFieldType.enum,
                },
                {
                  fieldName: 'MISTInjuryLocation',
                  fieldValue: 'Face',
                  fieldType: EFieldType.enum,
                },
              ],
            }
          );

          const evalReport = conditionLanguage.evaluateFieldTokens(condition, fieldTokens);

          expect(evalReport?.evaluationResult).toBeTruthy();
        });

        test('DISTINCT_VAR_IV', () => {
          const condition = `
        $IF $COUNT_COMPLEX(
          $DISTINCT MISTInjurySide
          $IF Abscess, Bubbling $FROM MISTInjuryType $THEN
            $OR
          $IF Face, Chest $FROM MISTInjuryLocation $THEN
            $AND
          $IF Front, Back $FROM MISTInjurySide $THEN
        )>1 $FROM MISTInjury $THEN`;

          const fieldTokens = createFieldTokenModels(
            {
              fieldName: 'MISTInjury',
              fieldType: EFieldType.complex,
              children: [
                {
                  fieldName: 'MISTInjuryType',
                  fieldValue: 'Abscess',
                  fieldType: EFieldType.enum,
                },
                {
                  fieldName: 'MISTInjuryLocation',
                  fieldValue: 'Face',
                  fieldType: EFieldType.enum,
                },
                {
                  fieldName: 'MISTInjurySide',
                  fieldValue: 'Front',
                  fieldType: EFieldType.enum,
                },
              ],
            },
            {
              fieldName: 'MISTInjury',
              fieldType: EFieldType.complex,
              children: [
                {
                  fieldName: 'MISTInjuryType',
                  fieldValue: 'WRONG_VAL',
                  fieldType: EFieldType.enum,
                },
                {
                  fieldName: 'MISTInjuryLocation',
                  fieldValue: 'Chest',
                  fieldType: EFieldType.enum,
                },
                {
                  fieldName: 'MISTInjurySide',
                  fieldValue: 'Front',
                  fieldType: EFieldType.enum,
                },
              ],
            },
            {
              fieldName: 'MISTInjury',
              fieldType: EFieldType.complex,
              children: [
                {
                  fieldName: 'MISTInjuryType',
                  fieldValue: 'Abscess',
                  fieldType: EFieldType.enum,
                },
                {
                  fieldName: 'MISTInjuryLocation',
                  fieldValue: 'Face',
                  fieldType: EFieldType.enum,
                },
                {
                  fieldName: 'MISTInjurySide',
                  fieldValue: 'Back',
                  fieldType: EFieldType.enum,
                },
              ],
            }
          );

          const evalReport = conditionLanguage.evaluateFieldTokens(condition, fieldTokens);

          expect(evalReport?.evaluationResult).toBeTruthy();
        });
      });
    });

    describe('Test ParenExpr', () => {
      const testParenSetup: ITestSetup[] = [
        {
          isPositive: true,
          testName: 'Returns TRUE if "AgeInYears" is empty & "SceneHeartRate" is less than 90',
          condition: `
        (
          $IF $EMPTY $FROM AgeInYears $THEN
            $AND
          $IF <90 $FROM SceneHeartRate $THEN
        )
          $OR
        (
          $IF >=16 $FROM AgeInYears $THEN
            $AND
          $IF >100 $FROM SceneHeartRate $THEN
        )`,
          fieldName: 'AgeInYears',
          fieldValue: null,
          fieldType: EFieldType.integer,
          fieldName2: 'SceneHeartRate',
          fieldValue2: 85,
          fieldType2: EFieldType.integer,
        },
        {
          isPositive: false,
          testName: 'Returns FALSE if "AgeInYears" is empty & "SceneHeartRate" is less than 90',
          condition: `
          $IF $EMPTY $FROM AgeInYears $THEN
            $AND
          $IF <90 $FROM SceneHeartRate $THEN
            $OR
          $IF >=16 $FROM AgeInYears $THEN
            $AND
          $IF >100 $FROM SceneHeartRate $THEN`,
          fieldName: 'AgeInYears',
          fieldValue: null,
          fieldType: EFieldType.integer,
          fieldName2: 'SceneHeartRate',
          fieldValue2: 85,
          fieldType2: EFieldType.integer,
        },
      ];

      testParenSetup.forEach((el) => {
        baseTest(el, true);
      });
    });

    describe('Test VehicleImpactExpr', () => {
      const testVehicleImpact: ITestSetup[] = [
        {
          isPositive: true,
          testName: 'Returns TRUE if the impact side of the condition equals at least one side of the field value',
          condition: '$IF impactSides=2 $FROM PositionImpactVehicle $THEN',
          fieldName: 'PositionImpactVehicle',
          fieldValue: {impactSides: [1, 2, 3]},
          fieldType: EFieldType.vehicleImpactType,
          fieldName2: 'Obstruction',
          fieldValue2: 'Facial Trauma',
          fieldType2: EFieldType.enum,
        },
        {
          isPositive: false,
          testName: 'Returns FALSE if the impact side of the condition is not equal to any side of the field value',
          condition: '$IF impactSides=5 $FROM PositionImpactVehicle $THEN',
          fieldName: 'PositionImpactVehicle',
          fieldValue: {impactSides: [1, 2, 3]},
          fieldType: EFieldType.vehicleImpactType,
          fieldName2: 'Obstruction',
          fieldValue2: 'Facial Trauma',
          fieldType2: EFieldType.enum,
        },
      ];

      testVehicleImpact.forEach((el) => baseTest(el));
    });

    describe('Test ValueExpr', () => {
      const valueExprTest = (args: ITestSetup) => {
        test(`${args.testName}`, () => {
          const fieldTokens = createFieldTokenModels(
            {
              fieldName: args.fieldName,
              fieldValue: args.fieldValue,
              fieldType: args.fieldType
            },
            {
              fieldName: args.fieldName,
              fieldValue: args.fieldType === EFieldType.enum_list ? [WRONG_VALUE] : WRONG_VALUE,
              fieldType: args.fieldType,
            },
            {
              fieldName: args.fieldName,
              fieldValue: args.fieldValue,
              fieldType: args.fieldType,
            }
          );

          const evalReport = conditionLanguage.evaluateFieldTokens(args.condition, fieldTokens);

          const isTriggeredTokens = (
            triggeredTokens: FieldTokenModel[] | null
          ): triggeredTokens is FieldTokenModel[] => {
            return !!triggeredTokens;
          };

          let evalRes = false;
          let triggeredTokensSize = 0;
          let isMatchingIds: boolean = false;

          if (evalReport) {
            const {evaluationResult, triggeredFieldTokens} = evalReport;
            evalRes = args.isPositive ? evaluationResult : !evaluationResult;

            if (isTriggeredTokens(triggeredFieldTokens)) {
              triggeredTokensSize = triggeredFieldTokens.length;
              isMatchingIds = triggeredFieldTokens[0].id === fieldTokens[0].id &&
                triggeredFieldTokens[0].id !== fieldTokens[2].id &&
                triggeredFieldTokens[1].id === fieldTokens[2].id;
            } else {
              isMatchingIds = triggeredFieldTokens === null;
            }
          }

          expect(evalRes).toBeTruthy();
          expect(triggeredTokensSize).toBe(args.isPositive ? 2 : 0);
          expect(isMatchingIds).toBeTruthy();
        });
      };

      const testSetup: TTestSetupButch = {
        string: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the value in the "FirstName" field is "John"',
            condition: '$IF John $FROM FirstName $THEN',
            fieldName: 'FirstName',
            fieldValue: 'John',
            fieldType: EFieldType.string,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if the value in the "FirstName" field is not "John"',
            condition: '$IF John $FROM FirstName $THEN',
            fieldName: 'FirstName',
            fieldValue: 'Ben',
            fieldType: EFieldType.string,
          },
        ],
        enum: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the value in the "ConsultantCredentials" field is "some data"',
            condition: '$IF some value $FROM ConsultantCredentials $THEN',
            fieldName: 'ConsultantCredentials',
            fieldValue: 'some value',
            fieldType: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns TRUE if the value in the "ConsultantCredentials" field is not "some data"',
            condition: '$IF some value $FROM ConsultantCredentials $THEN',
            fieldName: 'ConsultantCredentials',
            fieldValue: 'some other value',
            fieldType: EFieldType.enum,
          },
        ],
        enum_list: [
          {
            isPositive: true,
            testName: 'Returns TRUE if there is a "Collar" in the array of values of the "NeckMobility" field',
            condition: '$IF Collar $FROM NeckMobility $THEN',
            fieldName: 'NeckMobility',
            fieldValue: ['C-Spine Injury Suspected', 'Collar', 'RA or chronic OA', 'GOOD'],
            fieldType: EFieldType.enum_list,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if there is not a "Collar" in the array of values of the "NeckMobility" field',
            condition: '$IF Collar $FROM NeckMobility $THEN',
            fieldName: 'NeckMobility',
            fieldValue: ['C-Spine Injury Suspected', 'RA or chronic OA', 'GOOD'],
            fieldType: EFieldType.enum_list,
          },
        ],
      };

      describe('fieldType: "string"', () => {
        testSetup.string.forEach((s) => valueExprTest(s));
      });

      describe('fieldType: "enum"', () => {
        testSetup.enum.forEach((e) => valueExprTest(e));
      });

      describe('fieldType: "enum_list"', () => {
        testSetup.enum_list.forEach((e) => valueExprTest(e));
      });
    });

    describe('Test ValuesExpr', () => {
      const testSetupValues: TTestSetupButch = {
        enum: [
          {
            isPositive: true,
            testName: 'Returns TRUE if the fieldValue is equal to some value from the condition',
            condition: '$IF None = 1,Incomp = 2,Inapprop = 3,Confused = 4 $FROM VerbalResponse $THEN',
            fieldName: 'VerbalResponse',
            fieldValue: 'Incomp = 2',
            fieldType: EFieldType.enum,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if the fieldValue is not equal to any value from the condition',
            condition: '$IF None = 1,Incomp = 2,Inapprop = 3,Confused = 4 $FROM VerbalResponse $THEN',
            fieldName: 'VerbalResponse',
            fieldValue: WRONG_VALUE,
            fieldType: EFieldType.enum,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum,
          },
        ],
        enum_list: [
          {
            isPositive: true,
            testName: 'Returns TRUE if any of fieldValues is equal to value from the condition',
            condition: '$IF Flushed, Cyanotic, Mottled $FROM SkinColor $THEN',
            fieldName: 'SkinColor',
            fieldValue: ['Flushed', 'Mottled'],
            fieldType: EFieldType.enum_list,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum_list,
          },
          {
            isPositive: false,
            testName: 'Returns FALSE if every fieldValues is not equal to value from the condition ',
            condition: '$IF Flushed, Cyanotic, Mottled $FROM SkinColor $THEN',
            fieldName: 'SkinColor',
            fieldValue: ['red', 'black'],
            fieldType: EFieldType.enum_list,
            fieldName2: 'Obstruction',
            fieldValue2: 'Facial Trauma',
            fieldType2: EFieldType.enum_list,
          },
        ],
      };

      describe('enum', () => {
        testSetupValues.enum.forEach((el) => {
          baseTest(el);
        });
      });

      describe('enum_list', () => {
        testSetupValues.enum_list.forEach((el) => {
          baseTest(el);
        });
      });
    });
  });
}


