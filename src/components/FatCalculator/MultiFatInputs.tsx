import { TextField, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { ChangeEvent } from 'react';

interface Props {
  meatOne: number;
  meatTwo: number;
  meatOneRatio: number;
  meatTwoRatio: number;
  handleMeatOneChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMeatTwoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMeatOneRatioChange: (
    e: ChangeEvent<HTMLInputElement>
  ) => void;
}

export const MultiFatInputs = ({
  meatOne,
  meatOneRatio,
  meatTwo,
  meatTwoRatio,
  handleMeatOneChange,
  handleMeatTwoChange,
  handleMeatOneRatioChange,
}: Props) => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={6}>
        <Typography variant="body1">Fett in MF in %</Typography>
        <TextField
          type="text"
          name="muscle"
          id="muscle"
          value={meatOne}
          onChange={handleMeatOneChange}
          label="Fleisch A"
          variant="standard"
          sx={{ mr: 2, my: 2, width: '200px' }}
        />
        <TextField
          type="text"
          name="fatInMuscle"
          id="fatInMuscle"
          value={meatTwo}
          onChange={handleMeatTwoChange}
          label="Fleisch B"
          variant="standard"
          sx={{ mr: 2, width: '200px' }}
        />
      </Grid2>
      <Grid2 xs={6}>
        <Typography variant="body1">Mischung %</Typography>
        <TextField
          type="text"
          name="meatOneRatio"
          id="meatOneRatio"
          value={meatOneRatio}
          onChange={handleMeatOneRatioChange}
          label="Fleisch A - Anteil"
          variant="standard"
          sx={{ mr: 2, my: 2, width: '180px' }}
        />
        <TextField
          type="text"
          name="meatTwoRatio"
          id="meatTwoRatio"
          value={meatTwoRatio}
          disabled
          label="Fleisch B - Anteil"
          variant="standard"
          sx={{ mr: 2, width: '180px' }}
        />
      </Grid2>
    </Grid2>
  );
};
