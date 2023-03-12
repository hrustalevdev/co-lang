import { CoLang } from '..';

describe('Test "getFieldEntries()" method', () => {
  const conditionLanguage = new CoLang();
  getFieldEntriesTest(conditionLanguage);
})

export function getFieldEntriesTest(conditionLanguage: CoLang) {
  describe('Test "getFieldEntries()" method', () => {

    describe('Test ValueExpr', () => {
      test('Returns [\'MISTInjuryType\']', () => {
        const result = conditionLanguage.getFieldEntries('$IF Active Bleeding $FROM MISTInjuryType $THEN');

        expect(result).toEqual(['MISTInjuryType']);
      });
    });

    describe('Test ValuesExpr', () => {
      test('Returns [\'Look\']', () => {
        const result = conditionLanguage.getFieldEntries('$IF Foreign Body,Beard,Large Tongue,Loose Teeth,Other Issues $FROM Look $THEN');

        expect(result).toEqual(['Look']);
      });
    });

    describe('Test ComparatorExpr', () => {
      test('Returns [\'AgeInYears\']', () => {
        const result = conditionLanguage.getFieldEntries('$IF >=65 $FROM AgeInYears $THEN');

        expect(result).toEqual(['AgeInYears']);
      });
    });

    describe('Test AnyExpr', () => {
      test('Returns [\'Assailant\']', () => {
        const result = conditionLanguage.getFieldEntries('$IF $ANY $FROM Assailant $THEN');

        expect(result).toEqual(['Assailant']);
      });
    });

    describe('Test EmptyExpr', () => {
      test('Returns [\'DischargeFromED\']', () => {
        const result = conditionLanguage.getFieldEntries('$IF $EMPTY $FROM DischargeFromED $THEN');

        expect(result).toEqual(['DischargeFromED']);
      });
    });

    describe('Test NotExpr', () => {
      test('Returns [\'UrgentDefinitiveAirwayIndicated2\']', () => {
        const result = conditionLanguage.getFieldEntries('$IF $NOT(NONE) $FROM UrgentDefinitiveAirwayIndicated2 $THEN');

        expect(result).toEqual(['UrgentDefinitiveAirwayIndicated2']);
      });
    });

    describe('Test NumberExpr', () => {
      test('Returns [\'MallampatiClass\']', () => {
        const result = conditionLanguage.getFieldEntries('$IF 35 $FROM MallampatiClass $THEN');

        expect(result).toEqual(['MallampatiClass']);
      });
    });

    describe('Test BinaryExpr', () => {
      test('Returns [\'AgeInYears\', \'SceneTotalGCS\', \'TotalGCS\']', () => {
        const result = conditionLanguage.getFieldEntries('$IF <16 $FROM AgeInYears $THEN $AND ( $IF <=12 $FROM SceneTotalGCS $THEN $OR $IF <=12 $FROM TotalGCS $THEN )');

        expect(result).toEqual(['AgeInYears', 'SceneTotalGCS', 'TotalGCS']);
      });
    });

    describe('Test NumbersExpr', () => {
      test('Returns [\'MallampatiClass\']', () => {
        const result = conditionLanguage.getFieldEntries('$IF 3,4 $FROM MallampatiClass $THEN');

        expect(result).toEqual(['MallampatiClass']);
      });
    });

    describe('Test ComplexExpr', () => {
      test('Returns [\'MISTInjury\', \'MISTInjuryLocation\', \'MISTInjuryType\']', () => {
        const result = conditionLanguage.getFieldEntries('$IF $COMPLEX($IF Right Thigh $FROM MISTInjuryLocation $THEN $AND $IF Deformity $FROM MISTInjuryType $THEN) $FROM MISTInjury $THEN');

        expect(result).toEqual(['MISTInjury', 'MISTInjuryLocation', 'MISTInjuryType']);
      });
    });

    describe('Test CountExpr', () => {
      test('Returns [\'MISTInjuryType\']', () => {
        const result = conditionLanguage.getFieldEntries('$IF $COUNT(GSW)>1 $FROM MISTInjuryType $THEN');

        expect(result).toEqual(['MISTInjuryType']);
      });
    });

    describe('Test CountComplexExpr', () => {
      test('Returns [\'MISTInjury\', \'MISTInjuryLocation\', \'MISTInjuryType\']', () => {
        const result = conditionLanguage.getFieldEntries('$IF $COUNT_COMPLEX($DISTINCT MISTInjuryLocation $IF Mechanical Instability,Deformity $FROM MISTInjuryType $THEN $AND $IF Right Lower Leg,Left Lower Leg,Right Thigh,Left Thigh,Right Arm,Left Arm,Right Forearm,Left Forearm $FROM MISTInjuryLocation $THEN)>1 $FROM MISTInjury $THEN');

        expect(result).toEqual(['MISTInjury', 'MISTInjuryLocation', 'MISTInjuryType']);
      });

      test('Returns [\'MISTInjury\', \'MISTInjuryType\', \'MISTInjuryLocation\']', () => {
        const result = conditionLanguage.getFieldEntries('$IF $COUNT_COMPLEX($IF Mechanical Instability,Deformity $FROM MISTInjuryType $THEN $AND $IF Right Lower Leg,Left Lower Leg,Right Thigh,Left Thigh,Right Arm,Left Arm,Right Forearm,Left Forearm $FROM MISTInjuryLocation $THEN)>1 $FROM MISTInjury $THEN');

        expect(result).toEqual(['MISTInjury', 'MISTInjuryType', 'MISTInjuryLocation']);
      });
    });

    describe('Test VehicleImpactExpr', () => {
      test('Returns [\'PositionImpactVehicle\']', () => {
        const result = conditionLanguage.getFieldEntries('$IF impactSides=6 $FROM PositionImpactVehicle $THEN');

        expect(result).toEqual(['PositionImpactVehicle']);
      });
    });

    describe('Test complex condition', () => {
      test('Returns ["AgeInYears", "SceneBloodPressureSystolic", "BloodPressureSystolic", "PeripheralPulseIsPalpable", "SceneHeartRate", "HeartRate", "ArterialBloodGasBaseDeficit", "ArterialBloodGasLactate", "SceneVerbalResponse"]', () => {
        const condition = `
      (
        (
          $IF $EMPTY $FROM AgeInYears $THEN
            $AND
          $IF <=90 $FROM SceneBloodPressureSystolic $THEN
        )
          $OR
        (
          $IF >=16 $FROM AgeInYears $THEN
            $AND
          $IF <=90 $FROM SceneBloodPressureSystolic $THEN
        ) 
          $OR
        (
          $IF $EMPTY $FROM AgeInYears $THEN
            $AND
          $IF <=90 $FROM BloodPressureSystolic $THEN
        ) 
          $OR
        (
          $IF >16 $FROM AgeInYears $THEN
            $AND
          $IF <=90 $FROM BloodPressureSystolic $THEN
        )
          $OR
        (
          $IF NO $FROM PeripheralPulseIsPalpable $THEN
        ) 
          $OR
        (
          $IF $EMPTY $FROM AgeInYears $THEN
            $AND
          $IF >100 $FROM SceneHeartRate $THEN
        )
          $OR
        (
          $IF >=16 $FROM AgeInYears $THEN
            $AND
          $IF >100 $FROM SceneHeartRate $THEN
        )
          $OR
        (
          $IF $EMPTY $FROM AgeInYears $THEN
            $AND
          $IF >100 $FROM HeartRate $THEN
        )
          $OR
        (
          $IF >=16 $FROM AgeInYears $THEN
            $AND
          $IF >100 $FROM HeartRate $THEN
        )
          $OR
        $IF <=-3 $FROM ArterialBloodGasBaseDeficit $THEN
          $OR
        $IF >3 $FROM ArterialBloodGasLactate $THEN
      )
        $OR
      (
        $IF <16 $FROM AgeInYears $THEN
          $AND
        (
          $IF None = 1,Incomp = 2,Inapprop = 3,Confused = 4 $FROM SceneVerbalResponse $THEN
        )
      )
      `;
        const result = conditionLanguage.getFieldEntries(condition);

        expect(result).toEqual(
          [
            'AgeInYears',
            'SceneBloodPressureSystolic',
            'BloodPressureSystolic',
            'PeripheralPulseIsPalpable',
            'SceneHeartRate',
            'HeartRate',
            'ArterialBloodGasBaseDeficit',
            'ArterialBloodGasLactate',
            'SceneVerbalResponse',
          ]
        );
      });
    });

    describe('Test of the number of entries', () => {
      test('One entry', () => {
        const entries = conditionLanguage.getFieldEntries('$IF >=65 $FROM AgeInYears $THEN');

        expect(entries?.length).toBe(1);
        expect(entries?.includes('AgeInYears')).toBeTruthy();
      });

      test('Two entries', () => {
        const entries = conditionLanguage.getFieldEntries('$IF <=165 $FROM Height $THEN $AND $IF >=100 $FROM Weight $THEN');

        expect(entries?.length).toBe(2);
        expect(entries?.includes('Height')).toBeTruthy();
        expect(entries?.includes('Weight')).toBeTruthy();
        expect([...entries!][0]).toBe('Height');
        expect([...entries!][1]).toBe('Weight');
      });
    });

    describe('Test erroneous trigger', () => {
      test('Returns null', () => {
        const result = conditionLanguage.getFieldEntries('erroneous condition');

        expect(result).toBeNull();
      });
    });
  });
}
