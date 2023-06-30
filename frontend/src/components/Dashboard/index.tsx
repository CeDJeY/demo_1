import { useEffect } from 'react';
import Grid from '@mui/material/Grid';

import MDBox from '../../mdb/components/MDBox';
import DashboardLayout from '../../mdb/components/LayoutContainers/DashboardLayout';
import DashboardNavbar from '../../mdb/components/Navbars/DashboardNavbar';

import useReportsStats from '../../hooks/reports-stats';
import ReportsCountWidget from '../ReportsCountWidget';
import PartnersCountWidget from '../PartnersCountWidget';
import CountriesCountWidget from '../CountriesCountWidget';
import ReportsRateWidget from '../ReportsRateWidget';
import WeekdayBreakdownWidget from '../WeekdayBreakdownWidget';
import CountriesBreakdownWidget from '../CountriesBreakdownWidget';


export default function Dashboard() {
  const { fetchInRange } = useReportsStats();
  useEffect(() => {
    const to = new Date();
    const from = new Date(to.getTime() - 1000 * 60 * 60 * 24 * 5); // Take last 5 days for now
    // TODO use react's useState hook to point the selected range
    fetchInRange(from, to);
  }, [fetchInRange]);

  return (
    <DashboardLayout>
      <DashboardNavbar isMini />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <ReportsCountWidget />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <PartnersCountWidget />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <CountriesCountWidget />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <ReportsRateWidget />
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <WeekdayBreakdownWidget />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <CountriesBreakdownWidget />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>

            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}
