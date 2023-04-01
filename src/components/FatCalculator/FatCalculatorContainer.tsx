import { Calculate } from '@mui/icons-material';
import { Typography, Card, Divider } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { ChangeEvent, useMemo, useState } from 'react';

import { FatCalculator } from '../FatCalculator/FatCalculator';
import { MultiFatInputs } from '../FatCalculator/MultiFatInputs';

export const FatCalculatorContainer = () => {
  const [muscleValue, setMuscleValue] = useState<number>(0);
  const [neededFatValue, setNeededFatValue] = useState<number>(0);
  const [fatInmuscleValue, setFatInMuscleValue] = useState<number>(0);

  const [meatOne, setMeatOne] = useState<number>(0);
  const [meatTwo, setMeatTwo] = useState<number>(0);

  const [meatOneRatio, setMeatOneRatio] = useState<number>(50);
  const meatTwoRatio = useMemo(
    () => 100 - meatOneRatio,
    [meatOneRatio]
  );

  type FieldName =
    | 'muscleValue'
    | 'neededFatValue'
    | 'fatInmuscleValue'
    | 'meatOne'
    | 'meatTwo'
    | 'meatOneRatio';

  const calculatedFat: number = useMemo(
    () =>
      (muscleValue * (neededFatValue - fatInmuscleValue)) /
      (100 - fatInmuscleValue),
    [muscleValue, neededFatValue, fatInmuscleValue]
  );

  const handleValueChange = (
    e: ChangeEvent<HTMLInputElement>,
    name: FieldName
  ) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      switch (name) {
        case 'muscleValue':
          setMuscleValue(value);
          break;
        case 'fatInmuscleValue':
          if (value > 100) return;
          setFatInMuscleValue(value);
          break;
        case 'neededFatValue':
          if (value > 100) return;
          setNeededFatValue(value);
          break;
        case 'meatOne':
          setMeatOne(value);
          break;
        case 'meatTwo':
          setMeatTwo(value);
          break;
        case 'meatOneRatio':
          if (value > 100) return;
          setMeatOneRatio(value);
          break;
        default:
          return null;
      }
    }
  };

  return (
    <Grid2 container spacing={2}>
      <Grid2 md={12}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          <Calculate
            sx={{ mr: 1, fontSize: '100%', verticalAlign: 'middle' }}
          />
          Fettrechner
        </Typography>
      </Grid2>
      <Grid2 md={6} sm={8} xs={12}>
        <Card sx={{ mt: 3, p: 3 }} elevation={1}>
          <FatCalculator
            muscleValue={muscleValue}
            handleMuscleValueChange={(e) =>
              handleValueChange(e, 'muscleValue')
            }
            neededFatValue={neededFatValue}
            handleNeededFatValueChange={(e) =>
              handleValueChange(e, 'neededFatValue')
            }
            fatInmuscleValue={fatInmuscleValue}
            handleFatInMuscleValueChange={(e) =>
              handleValueChange(e, 'fatInmuscleValue')
            }
          />
        </Card>
      </Grid2>
      <Grid2 md={6} sm={4} xs={12}>
        <Typography variant="body1" sx={{ mt: 3 }}>
          Fett pro Tag ergänzen:
          {` ${Math.round(calculatedFat)} Gramm`}
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }}>
          Muskelfleischmenge neu:
          {` ${Math.round(muscleValue - calculatedFat)} Gramm`}
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }}>
          Gesamtmuskelfleisch inkl. Fett: {` ${muscleValue} Gramm`}
        </Typography>
      </Grid2>
      <Divider sx={{ my: 2 }} />
      <Grid2 md={6} sm={8} xs={12}>
        <Card sx={{ mt: 3, p: 3 }} elevation={1}>
          <MultiFatInputs
            meatOne={meatOne}
            meatTwo={meatTwo}
            meatOneRatio={meatOneRatio}
            meatTwoRatio={meatTwoRatio}
            handleMeatOneChange={(e) =>
              handleValueChange(e, 'meatOne')
            }
            handleMeatOneRatioChange={(e) =>
              handleValueChange(e, 'meatOneRatio')
            }
            handleMeatTwoChange={(e) =>
              handleValueChange(e, 'meatTwo')
            }
          />
        </Card>
      </Grid2>
      <Grid2 md={6} sm={4} xs={12}>
        <Typography variant="body1" sx={{ my: 1, p: 1 }}>
          Fettanteil in dieser Mischung in %:
          {` ${Math.round(
            (meatOne * meatOneRatio + meatTwo * meatTwoRatio) / 100
          )} Gramm`}
        </Typography>
      </Grid2>
    </Grid2>
  );
};
