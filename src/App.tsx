import { useState } from 'react';
import { CssBaseline, Tab, Tabs, Typography } from '@mui/material';
import { Calculate } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Grid2 from '@mui/material/Unstable_Grid2';
import { FatCalculatorContainer } from './components/FatCalculator/FatCalculatorContainer';

function App() {
  const [count, setCount] = useState('1');

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setCount(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  return (
    <>
      <CssBaseline enableColorScheme />
      <TabContext value={count}>
        <TabList onChange={handleChange}>
          <Tab
            label="Fat Calculator"
            icon={<Calculate />}
            value="1"
            {...a11yProps(1)}
          />
          <Tab
            label="seealgenMehl"
            icon={<Calculate />}
            value="2"
            {...a11yProps(2)}
          />
        </TabList>
        <TabPanel value="1">
          <FatCalculatorContainer />
        </TabPanel>
        <TabPanel value="2">
          <Grid2 container spacing={2}>
            <Grid2 md={12}>
              <Typography variant="h2" sx={{ mb: 2 }}>
                <Calculate
                  sx={{
                    mr: 1,
                    fontSize: '100%',
                    verticalAlign: 'middle',
                  }}
                />
                Seealgenmehl Rechner
              </Typography>
            </Grid2>
          </Grid2>
        </TabPanel>
      </TabContext>
    </>
  );
}

export default App;
