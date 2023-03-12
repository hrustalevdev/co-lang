import { CoLang } from '../CoLang';

describe('Test "formatCondition" method', () => {
  const conditionLanguage = new CoLang();
  getFormatConditionTest(conditionLanguage);
})

export function getFormatConditionTest(conditionLanguage: CoLang) {
  describe('FORMAT_VISITOR', () => {
    describe('Binary', () => {
      test('OR', () => {
        const uglyCondition = '$IF   $EMPTY  \n \n $FROM \t AgeInYears   $THEN $OR $IF  \n <=90 $FROM SceneBloodPressureSystolic $THEN';
        const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
        expect(formattedCondition).toBe(
          `$IF $EMPTY $FROM AgeInYears $THEN
$OR
$IF <=90 $FROM SceneBloodPressureSystolic $THEN`)
      })

      test('AND', () => {
        const uglyCondition = '$IF   $EMPTY  \n \n $FROM \t AgeInYears   $THEN $AND $IF  \n <=90 $FROM SceneBloodPressureSystolic $THEN';
        const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
        expect(formattedCondition).toBe(
          `$IF $EMPTY $FROM AgeInYears $THEN
$AND
$IF <=90 $FROM SceneBloodPressureSystolic $THEN`)
      })
    })

    describe('Comparator', () => {
      test('Number', () => {
        const uglyCondition = '$IF \t  >  1  \n $FROM bar  \n  $THEN'
        const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
        expect(formattedCondition).toBe('$IF >1 $FROM bar $THEN')
      })

      test('DateTime', () => {
        const uglyCondition = '$IF \t  <=  3M  \n $FROM bar  \n  $THEN'
        const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
        expect(formattedCondition).toBe('$IF <=3M $FROM bar $THEN')
      })
    })

    test('ANY', () => {
      const uglyCondition = '$IF \t  $ANY  \n $FROM bar  \n  $THEN'
      const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
      expect(formattedCondition).toBe('$IF $ANY $FROM bar $THEN')
    })

    test('EMPTY', () => {
      const uglyCondition = '$IF \t  $EMPTY  \n $FROM bar  \n  $THEN'
      const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
      expect(formattedCondition).toBe('$IF $EMPTY $FROM bar $THEN')
    })

    describe('Number', () => {
      test('AIS', () => {
        const uglyCondition = '$IF  \n \t 854001.3 $FROM    AISSelection \n$THEN'
        const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
        expect(formattedCondition).toBe('$IF 854001.3 $FROM AISSelection $THEN')
      })

      test('Integer', () => {
        const uglyCondition = '$IF \t  200  \n $FROM bar  \n  $THEN'
        const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
        expect(formattedCondition).toBe('$IF 200 $FROM bar $THEN')
      })

      test('Decimal', () => {
        const uglyCondition = '$IF \t  1.3  \n $FROM bar  \n  $THEN'
        const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
        expect(formattedCondition).toBe('$IF 1.3 $FROM bar $THEN')
      })
    })

    describe('Numbers', () => {
      test('AIS', () => {
        const uglyCondition = '$IF    854001.3 \n ,854112.3 \t,854152.3  ,854182.3,854172.3 $FROM  \t AISSelection $THEN'
        const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
        expect(formattedCondition).toBe('$IF 854001.3,854112.3,854152.3,854182.3,854172.3 $FROM AISSelection $THEN')
      })

      test('Integer', () => {
        const uglyCondition = '$IF \n  14,   18, 20  \t $FROM AgeInYears $THEN'
        const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
        expect(formattedCondition).toBe('$IF 14,18,20 $FROM AgeInYears $THEN')
      })

      test('Decimal', () => {
        const uglyCondition = '$IF \n  36.6, 36.7,   \t37.1 $FROM   Temp $THEN'
        const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
        expect(formattedCondition).toBe('$IF 36.6,36.7,37.1 $FROM Temp $THEN')
      })
    })

    describe('NOT', () => {
      test('Value', () => {
        const uglyCondition = '$IF   $NOT(Incomp = 2 )  \t $FROM    VerbalResponse  \n $THEN'
        const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
        expect(formattedCondition).toBe('$IF $NOT(Incomp = 2) $FROM VerbalResponse $THEN')
      })

      test('Values', () => {
        const uglyCondition = '$IF \t $NOT(None = 1,Incomp = 2,Inapprop = 3,\n  Confused = 4) $FROM   VerbalResponse   \n$THEN'
        const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
        expect(formattedCondition).toBe('$IF $NOT(None = 1,Incomp = 2,Inapprop = 3,Confused = 4) $FROM VerbalResponse $THEN')
      })

      test('Number', () => {
        const uglyCondition = '$IF   $NOT( 36.6)\n $FROM   Temp $THEN'
        const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
        expect(formattedCondition).toBe('$IF $NOT(36.6) $FROM Temp $THEN')
      })

      test('Numbers', () => {
        const uglyCondition = '$IF $NOT(36.6  ,   36.7, 38.1)   $FROM \tTemp   $THEN'
        const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
        expect(formattedCondition).toBe('$IF $NOT(36.6,36.7,38.1) $FROM Temp $THEN')
      })
    })

    test('Complex', () => {
      const uglyCondition = '$IF  \t  \n $COMPLEX( \$IF   $EMPTY  \n \n $FROM \t AgeInYears   $THEN $OR $IF  \n <=90 $FROM SceneBloodPressureSystolic $THEN) \n   $FROM   bar  $THEN'
      const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
      expect(formattedCondition).toBe(
        `$IF $COMPLEX(
  $IF $EMPTY $FROM AgeInYears $THEN
  $OR
  $IF <=90 $FROM SceneBloodPressureSystolic $THEN
) $FROM bar $THEN`)
    })

    describe('Count', () => {
      test('DISTINCT', () => {
        const uglyCondition = '$IF $COUNT \t \n   ( \n $DISTINCT\t) <=1    $FROM   bar   $THEN'
        const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
        expect(formattedCondition).toBe('$IF $COUNT($DISTINCT)<=1 $FROM bar $THEN')
      })

      test('Value', () => {
        const uglyCondition = '$IF \t$COUNT(  foo bar  )>1 $FROM   MISTInjuryType \n$THEN'
        const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
        expect(formattedCondition).toBe('$IF $COUNT(foo bar)>1 $FROM MISTInjuryType $THEN')
      })
    })

    describe('Count complex', () => {
      test('Expr', () => {
        const uglyCondition = '$IF $COUNT_COMPLEX($IF Mechanical Instability,  \nDeformity $FROM MISTInjuryType \t  $THEN $AND   $IF Right Lower Leg,Left Lower Leg $FROM MISTInjuryLocation $THEN)>1 $FROM MISTInjury $THEN'
        const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
        expect(formattedCondition).toBe(
          `$IF $COUNT_COMPLEX(
  $IF Mechanical Instability,Deformity $FROM MISTInjuryType $THEN
  $AND
  $IF Right Lower Leg,Left Lower Leg $FROM MISTInjuryLocation $THEN
)>1 $FROM MISTInjury $THEN`)
      })

      test('DISTINCT', () => {
        const uglyCondition = '$IF $COUNT_COMPLEX($DISTINCT MISTInjuryLocation $IF 200 $FROM foo $THEN $AND $IF 500 $FROM MISTInjuryLocation $THEN)>1 $FROM MISTInjury $THEN'
        const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
        expect(formattedCondition).toBe(
          `$IF $COUNT_COMPLEX(
  $DISTINCT MISTInjuryLocation
  $IF 200 $FROM foo $THEN
  $AND
  $IF 500 $FROM MISTInjuryLocation $THEN
)>1 $FROM MISTInjury $THEN`)
      })
    })


    test('Paren', () => {
      const uglyCondition = '((($IF  \t  \n $COMPLEX($IF $COMPLEX($IF 200 $FROM foo $THEN $AND $IF 500 $FROM MISTInjuryLocation $THEN) $FROM bar $THEN) \n   $FROM   bar  $THEN)))'
      const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
      expect(formattedCondition).toBe(
        `(
  (
    (
      $IF $COMPLEX(
        $IF $COMPLEX(
          $IF 200 $FROM foo $THEN
          $AND
          $IF 500 $FROM MISTInjuryLocation $THEN
        ) $FROM bar $THEN
      ) $FROM bar $THEN
    )
  )
)`)
    })

    test('VehicleImpact', () => {
      const uglyCondition = '$IF  \n impactSides = 2 $FROM PositionImpactVehicle $THEN'
      const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
      expect(formattedCondition).toBe('$IF impactSides=2 $FROM PositionImpactVehicle $THEN')
    })

    test('Value', () => {
      const uglyCondition = '$IF foo bar \n  $FROM \t PositionImpactVehicle   $THEN'
      const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
      expect(formattedCondition).toBe('$IF foo bar $FROM PositionImpactVehicle $THEN')
    })

    test('Values', () => {
      const uglyCondition = '$IF Mechanical Instability,  Deformity $FROM \tMISTInjuryType\n   $THEN'
      const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
      expect(formattedCondition).toBe('$IF Mechanical Instability,Deformity $FROM MISTInjuryType $THEN')
    })

    test('HARD', () => {
      const uglyCondition = '(($IF $EMPTY $FROM AgeInYears $THEN $AND $IF <=90 $FROM SceneBloodPressureSystolic $THEN) $OR ($IF >=16 $FROM AgeInYears $THEN $AND $IF <=90 $FROM SceneBloodPressureSystolic $THEN) $OR ($IF $EMPTY $FROM AgeInYears $THEN $AND $IF <=90 $FROM BloodPressureSystolic $THEN) $OR ($IF >16 $FROM AgeInYears $THEN $AND $IF <=90 $FROM BloodPressureSystolic $THEN) $OR ($IF NO $FROM PeripheralPulseIsPalpable $THEN) $OR ($IF $EMPTY $FROM AgeInYears $THEN $AND $IF >100 $FROM SceneHeartRate $THEN) $OR ($IF >=16 $FROM AgeInYears $THEN $AND $IF >100 $FROM SceneHeartRate $THEN) $OR ($IF $EMPTY $FROM AgeInYears $THEN $AND $IF >100 $FROM HeartRate $THEN) $OR ($IF >=16 $FROM AgeInYears $THEN $AND $IF >100 $FROM HeartRate $THEN) $OR $IF <=-3 $FROM ArterialBloodGasBaseDeficit $THEN $OR $IF >3 $FROM ArterialBloodGasLactate $THEN ) $OR ( $IF <16 $FROM AgeInYears $THEN $AND ( $IF None = 1,Incomp = 2,Inapprop = 3,Confused = 4 $FROM SceneVerbalResponse $THEN $OR ($IF None = 1 $FROM SceneVerbalResponsePeds $THEN $OR $IF Moans to Pain = 2 $FROM SceneVerbalResponsePeds $THEN $OR $IF Cries to Pain = 3 $FROM SceneVerbalResponsePeds $THEN $OR $IF Irritable; Cries = 4 $FROM SceneVerbalResponsePeds $THEN) $OR $IF None = 1,Incomp = 2,Inapprop = 3,Confused = 4 $FROM VerbalResponse $THEN $OR ($IF None = 1 $FROM VerbalResponsePeds $THEN $OR $IF Moans to Pain = 2 $FROM VerbalResponsePeds $THEN $OR $IF Cries to Pain = 3 $FROM VerbalResponsePeds $THEN $OR $IF Irritable; Cries = 4 $FROM VerbalResponsePeds $THEN) $OR $IF None = 1,To Pain = 2 $FROM SceneEyeResponse $THEN $OR $IF None = 1,To Pain = 2 $FROM EyeResponse $THEN $OR $IF <35 $FROM Temp $THEN $OR $IF <35 $FROM SceneTemp $THEN $OR ($IF <=3M $FROM Age $THEN $AND $IF <60 $FROM BloodPressureSystolic $THEN) $OR ($IF <=3M $FROM Age $THEN $AND $IF <60 $FROM SceneBloodPressureSystolic $THEN) $OR ($IF <=1y $FROM Age $THEN $AND $IF >3M $FROM Age $THEN $AND $IF <80 $FROM SceneBloodPressureSystolic $THEN) $OR ($IF <=1y $FROM Age $THEN $AND $IF >3M $FROM Age $THEN $AND $IF <80 $FROM BloodPressureSystolic $THEN) $OR ($IF >1 $FROM AgeInYears $THEN $AND $IF <=90 $FROM SceneBloodPressureSystolic $THEN) $OR ($IF >1 $FROM AgeInYears $THEN $AND $IF <=90 $FROM BloodPressureSystolic $THEN) $OR $IF >1.6 $FROM ArterialBloodGasLactate $THEN $OR ( $IF <20 $FROM ArterialBloodGasHCO3 $THEN $AND $IF <7.3 $FROM ArterialBloodGasPh $THEN ))) $OR (( $IF None = 1,Incomp = 2,Inapprop = 3,Confused = 4 $FROM SceneVerbalResponse $THEN $OR ($IF None = 1 $FROM SceneVerbalResponsePeds $THEN $OR $IF Moans to Pain = 2 $FROM SceneVerbalResponsePeds $THEN $OR $IF Cries to Pain = 3 $FROM SceneVerbalResponsePeds $THEN $OR $IF Irritable; Cries = 4 $FROM SceneVerbalResponsePeds $THEN) $OR $IF None = 1,Incomp = 2,Inapprop = 3,Confused = 4 $FROM VerbalResponse $THEN $OR ($IF None = 1 $FROM VerbalResponsePeds $THEN $OR $IF Moans to Pain = 2 $FROM VerbalResponsePeds $THEN $OR $IF Cries to Pain = 3 $FROM VerbalResponsePeds $THEN $OR $IF Irritable; Cries = 4 $FROM VerbalResponsePeds $THEN) $OR $IF None = 1,To Pain = 2 $FROM SceneEyeResponse $THEN $OR $IF None = 1,To Pain = 2 $FROM EyeResponse $THEN $OR $IF <35 $FROM Temp $THEN $OR $IF <35 $FROM SceneTemp $THEN $OR ($IF <=3M $FROM Age $THEN $AND $IF <60 $FROM BloodPressureSystolic $THEN) $OR ($IF <=3M $FROM Age $THEN $AND $IF <60 $FROM SceneBloodPressureSystolic $THEN) $OR ($IF <=1y $FROM Age $THEN $AND $IF >3M $FROM Age $THEN $AND $IF <80 $FROM SceneBloodPressureSystolic $THEN) $OR ($IF <=1y $FROM Age $THEN $AND $IF >3M $FROM Age $THEN $AND $IF <80 $FROM BloodPressureSystolic $THEN) $OR ($IF >1 $FROM AgeInYears $THEN $AND $IF <=90 $FROM SceneBloodPressureSystolic $THEN) $OR ($IF >1 $FROM AgeInYears $THEN $AND $IF <=90 $FROM BloodPressureSystolic $THEN) $OR $IF >1.6 $FROM ArterialBloodGasLactate $THEN $OR ( $IF <20 $FROM ArterialBloodGasHCO3 $THEN $AND $IF <7.3 $FROM ArterialBloodGasPh $THEN )) $AND (( $IF > 2 sec $FROM CapillaryRefill $THEN $OR $IF COLD $FROM SkinTemperature $THEN $OR $IF Flushed,Cyanotic,Mottled $FROM SkinColor $THEN $OR ($IF <=3M $FROM Age $THEN $AND $IF >180 $FROM SceneHeartRate $THEN) $OR ($IF <=2y $FROM Age $THEN $AND $IF >3M $FROM Age $THEN) $AND $IF >160 $FROM SceneHeartRate $THEN $OR ($IF <16 $FROM AgeInYears $THEN $AND $IF >=2 $FROM AgeInYears $THEN $AND $IF >140 $FROM SceneHeartRate $THEN) $OR ($IF <=3M $FROM Age $THEN $AND $IF >180 $FROM HeartRate $THEN) $OR ($IF <=2y $FROM Age $THEN $AND $IF >3M $FROM Age $THEN) $AND $IF >160 $FROM HeartRate $THEN $OR ($IF <16 $FROM AgeInYears $THEN $AND $IF >=2 $FROM AgeInYears $THEN $AND $IF >140 $FROM HeartRate $THEN) $OR ($IF <1 $FROM AgeInYears $THEN $AND $IF >60 $FROM SceneRespiratoryRate $THEN) $OR ($IF <=3 $FROM AgeInYears $THEN $AND $IF >=1 $FROM AgeInYears $THEN $AND $IF >40 $FROM SceneRespiratoryRate $THEN) $OR ($IF <=5 $FROM AgeInYears $THEN $AND $IF >=4 $FROM AgeInYears $THEN $AND $IF >34 $FROM SceneRespiratoryRate $THEN) $OR ($IF <=12 $FROM AgeInYears $THEN $AND $IF >=6 $FROM AgeInYears $THEN $AND $IF >40 $FROM SceneRespiratoryRate $THEN) $OR ($IF <=18 $FROM AgeInYears $THEN $AND $IF >=13 $FROM AgeInYears $THEN $AND $IF >40 $FROM SceneRespiratoryRate $THEN) $OR ($IF <1 $FROM AgeInYears $THEN $AND $IF >60 $FROM RespiratoryRate $THEN) $OR ($IF <=3 $FROM AgeInYears $THEN $AND $IF >=1 $FROM AgeInYears $THEN $AND $IF >40 $FROM RespiratoryRate $THEN) $OR ($IF <=5 $FROM AgeInYears $THEN $AND $IF >=4 $FROM AgeInYears $THEN $AND $IF >34 $FROM RespiratoryRate $THEN) $OR ($IF <=12 $FROM AgeInYears $THEN $AND $IF >=6 $FROM AgeInYears $THEN $AND $IF >40 $FROM RespiratoryRate $THEN) $OR ($IF <=18 $FROM AgeInYears $THEN $AND $IF >=13 $FROM AgeInYears $THEN $AND $IF >40 $FROM RespiratoryRate $THEN) ) $AND $IF <16 $FROM AgeInYears $THEN )) $OR $IF YES $FROM SignsofUncontrolledExternalHemorrhage $THEN $OR $IF $ANY $FROM CovidFoleyCatheterIndications $THEN $OR $IF Definitive Airway $FROM AirwayInterventions $THEN $OR $IF $ANY $FROM VasoactiveInfusions $THEN $OR $IF >500 $FROM CovidFoleyBladderScan $THEN'
      const formattedCondition = conditionLanguage.formatCondition(uglyCondition);
      expect(formattedCondition).toBe(
        `(
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
    $OR
    (
      $IF None = 1 $FROM SceneVerbalResponsePeds $THEN
      $OR
      $IF Moans to Pain = 2 $FROM SceneVerbalResponsePeds $THEN
      $OR
      $IF Cries to Pain = 3 $FROM SceneVerbalResponsePeds $THEN
      $OR
      $IF Irritable,Cries = 4 $FROM SceneVerbalResponsePeds $THEN
    )
    $OR
    $IF None = 1,Incomp = 2,Inapprop = 3,Confused = 4 $FROM VerbalResponse $THEN
    $OR
    (
      $IF None = 1 $FROM VerbalResponsePeds $THEN
      $OR
      $IF Moans to Pain = 2 $FROM VerbalResponsePeds $THEN
      $OR
      $IF Cries to Pain = 3 $FROM VerbalResponsePeds $THEN
      $OR
      $IF Irritable,Cries = 4 $FROM VerbalResponsePeds $THEN
    )
    $OR
    $IF None = 1,To Pain = 2 $FROM SceneEyeResponse $THEN
    $OR
    $IF None = 1,To Pain = 2 $FROM EyeResponse $THEN
    $OR
    $IF <35 $FROM Temp $THEN
    $OR
    $IF <35 $FROM SceneTemp $THEN
    $OR
    (
      $IF <=3M $FROM Age $THEN
      $AND
      $IF <60 $FROM BloodPressureSystolic $THEN
    )
    $OR
    (
      $IF <=3M $FROM Age $THEN
      $AND
      $IF <60 $FROM SceneBloodPressureSystolic $THEN
    )
    $OR
    (
      $IF <=1y $FROM Age $THEN
      $AND
      $IF >3M $FROM Age $THEN
      $AND
      $IF <80 $FROM SceneBloodPressureSystolic $THEN
    )
    $OR
    (
      $IF <=1y $FROM Age $THEN
      $AND
      $IF >3M $FROM Age $THEN
      $AND
      $IF <80 $FROM BloodPressureSystolic $THEN
    )
    $OR
    (
      $IF >1 $FROM AgeInYears $THEN
      $AND
      $IF <=90 $FROM SceneBloodPressureSystolic $THEN
    )
    $OR
    (
      $IF >1 $FROM AgeInYears $THEN
      $AND
      $IF <=90 $FROM BloodPressureSystolic $THEN
    )
    $OR
    $IF >1.6 $FROM ArterialBloodGasLactate $THEN
    $OR
    (
      $IF <20 $FROM ArterialBloodGasHCO3 $THEN
      $AND
      $IF <7.3 $FROM ArterialBloodGasPh $THEN
    )
  )
)
$OR
(
  (
    $IF None = 1,Incomp = 2,Inapprop = 3,Confused = 4 $FROM SceneVerbalResponse $THEN
    $OR
    (
      $IF None = 1 $FROM SceneVerbalResponsePeds $THEN
      $OR
      $IF Moans to Pain = 2 $FROM SceneVerbalResponsePeds $THEN
      $OR
      $IF Cries to Pain = 3 $FROM SceneVerbalResponsePeds $THEN
      $OR
      $IF Irritable,Cries = 4 $FROM SceneVerbalResponsePeds $THEN
    )
    $OR
    $IF None = 1,Incomp = 2,Inapprop = 3,Confused = 4 $FROM VerbalResponse $THEN
    $OR
    (
      $IF None = 1 $FROM VerbalResponsePeds $THEN
      $OR
      $IF Moans to Pain = 2 $FROM VerbalResponsePeds $THEN
      $OR
      $IF Cries to Pain = 3 $FROM VerbalResponsePeds $THEN
      $OR
      $IF Irritable,Cries = 4 $FROM VerbalResponsePeds $THEN
    )
    $OR
    $IF None = 1,To Pain = 2 $FROM SceneEyeResponse $THEN
    $OR
    $IF None = 1,To Pain = 2 $FROM EyeResponse $THEN
    $OR
    $IF <35 $FROM Temp $THEN
    $OR
    $IF <35 $FROM SceneTemp $THEN
    $OR
    (
      $IF <=3M $FROM Age $THEN
      $AND
      $IF <60 $FROM BloodPressureSystolic $THEN
    )
    $OR
    (
      $IF <=3M $FROM Age $THEN
      $AND
      $IF <60 $FROM SceneBloodPressureSystolic $THEN
    )
    $OR
    (
      $IF <=1y $FROM Age $THEN
      $AND
      $IF >3M $FROM Age $THEN
      $AND
      $IF <80 $FROM SceneBloodPressureSystolic $THEN
    )
    $OR
    (
      $IF <=1y $FROM Age $THEN
      $AND
      $IF >3M $FROM Age $THEN
      $AND
      $IF <80 $FROM BloodPressureSystolic $THEN
    )
    $OR
    (
      $IF >1 $FROM AgeInYears $THEN
      $AND
      $IF <=90 $FROM SceneBloodPressureSystolic $THEN
    )
    $OR
    (
      $IF >1 $FROM AgeInYears $THEN
      $AND
      $IF <=90 $FROM BloodPressureSystolic $THEN
    )
    $OR
    $IF >1.6 $FROM ArterialBloodGasLactate $THEN
    $OR
    (
      $IF <20 $FROM ArterialBloodGasHCO3 $THEN
      $AND
      $IF <7.3 $FROM ArterialBloodGasPh $THEN
    )
  )
  $AND
  (
    (
      $IF > 2 sec $FROM CapillaryRefill $THEN
      $OR
      $IF COLD $FROM SkinTemperature $THEN
      $OR
      $IF Flushed,Cyanotic,Mottled $FROM SkinColor $THEN
      $OR
      (
        $IF <=3M $FROM Age $THEN
        $AND
        $IF >180 $FROM SceneHeartRate $THEN
      )
      $OR
      (
        $IF <=2y $FROM Age $THEN
        $AND
        $IF >3M $FROM Age $THEN
      )
      $AND
      $IF >160 $FROM SceneHeartRate $THEN
      $OR
      (
        $IF <16 $FROM AgeInYears $THEN
        $AND
        $IF >=2 $FROM AgeInYears $THEN
        $AND
        $IF >140 $FROM SceneHeartRate $THEN
      )
      $OR
      (
        $IF <=3M $FROM Age $THEN
        $AND
        $IF >180 $FROM HeartRate $THEN
      )
      $OR
      (
        $IF <=2y $FROM Age $THEN
        $AND
        $IF >3M $FROM Age $THEN
      )
      $AND
      $IF >160 $FROM HeartRate $THEN
      $OR
      (
        $IF <16 $FROM AgeInYears $THEN
        $AND
        $IF >=2 $FROM AgeInYears $THEN
        $AND
        $IF >140 $FROM HeartRate $THEN
      )
      $OR
      (
        $IF <1 $FROM AgeInYears $THEN
        $AND
        $IF >60 $FROM SceneRespiratoryRate $THEN
      )
      $OR
      (
        $IF <=3 $FROM AgeInYears $THEN
        $AND
        $IF >=1 $FROM AgeInYears $THEN
        $AND
        $IF >40 $FROM SceneRespiratoryRate $THEN
      )
      $OR
      (
        $IF <=5 $FROM AgeInYears $THEN
        $AND
        $IF >=4 $FROM AgeInYears $THEN
        $AND
        $IF >34 $FROM SceneRespiratoryRate $THEN
      )
      $OR
      (
        $IF <=12 $FROM AgeInYears $THEN
        $AND
        $IF >=6 $FROM AgeInYears $THEN
        $AND
        $IF >40 $FROM SceneRespiratoryRate $THEN
      )
      $OR
      (
        $IF <=18 $FROM AgeInYears $THEN
        $AND
        $IF >=13 $FROM AgeInYears $THEN
        $AND
        $IF >40 $FROM SceneRespiratoryRate $THEN
      )
      $OR
      (
        $IF <1 $FROM AgeInYears $THEN
        $AND
        $IF >60 $FROM RespiratoryRate $THEN
      )
      $OR
      (
        $IF <=3 $FROM AgeInYears $THEN
        $AND
        $IF >=1 $FROM AgeInYears $THEN
        $AND
        $IF >40 $FROM RespiratoryRate $THEN
      )
      $OR
      (
        $IF <=5 $FROM AgeInYears $THEN
        $AND
        $IF >=4 $FROM AgeInYears $THEN
        $AND
        $IF >34 $FROM RespiratoryRate $THEN
      )
      $OR
      (
        $IF <=12 $FROM AgeInYears $THEN
        $AND
        $IF >=6 $FROM AgeInYears $THEN
        $AND
        $IF >40 $FROM RespiratoryRate $THEN
      )
      $OR
      (
        $IF <=18 $FROM AgeInYears $THEN
        $AND
        $IF >=13 $FROM AgeInYears $THEN
        $AND
        $IF >40 $FROM RespiratoryRate $THEN
      )
    )
    $AND
    $IF <16 $FROM AgeInYears $THEN
  )
)
$OR
$IF YES $FROM SignsofUncontrolledExternalHemorrhage $THEN
$OR
$IF $ANY $FROM CovidFoleyCatheterIndications $THEN
$OR
$IF Definitive Airway $FROM AirwayInterventions $THEN
$OR
$IF $ANY $FROM VasoactiveInfusions $THEN
$OR
$IF >500 $FROM CovidFoleyBladderScan $THEN`)
    })
  })
}

