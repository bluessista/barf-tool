import { Divider, TextField } from '@mui/material';
import { ChangeEvent } from 'react';

interface Props {
  muscleValue: number;
  handleMuscleValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
  neededFatValue: number;
  handleNeededFatValueChange: (
    e: ChangeEvent<HTMLInputElement>
  ) => void;
  fatInmuscleValue: number;
  handleFatInMuscleValueChange: (
    e: ChangeEvent<HTMLInputElement>
  ) => void;
}

export const FatCalculator = ({
  muscleValue,
  handleFatInMuscleValueChange,
  fatInmuscleValue,
  neededFatValue,
  handleMuscleValueChange,
  handleNeededFatValueChange,
}: Props) => {
  return (
    <form>
      <TextField
        type="text"
        name="muscle"
        id="muscle"
        value={muscleValue}
        onChange={handleMuscleValueChange}
        label="Muskelfleisch-Bedarf pro Tag"
        variant="standard"
        sx={{ mr: 2, width: '400px' }}
      />
      <Divider sx={{ my: 2 }} />
      <TextField
        type="text"
        name="neededValue"
        id="neededValue"
        value={neededFatValue}
        onChange={handleNeededFatValueChange}
        label="Fettgehalt in %"
        variant="standard"
        sx={{ mr: 2, width: '400px' }}
      />
      <Divider sx={{ my: 2 }} />
      <TextField
        type="text"
        name="fatInMuscle"
        id="fatInMuscle"
        value={fatInmuscleValue}
        onChange={handleFatInMuscleValueChange}
        label="Fettanteil im Fleisch in %"
        variant="standard"
        sx={{ mr: 2, width: '400px' }}
      />
    </form>
  );
};
