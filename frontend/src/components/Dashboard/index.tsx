import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import MDBox from '../../mdb/components/MDBox';

import DashboardLayout from '../../mdb/components/LayoutContainers/DashboardLayout';
import DashboardNavbar from '../../mdb/components/Navbars/DashboardNavbar';
import ReportsBarChart from '../../mdb/components/Charts/BarCharts/ReportsBarChart';
import ReportsLineChart from '../../mdb/components/Charts/LineCharts/ReportsLineChart';

import ReportsCountWidget from '../ReportsCountWidget';
import PartnersCountWidget from '../PartnersCountWidget';
import CountriesCountWidget from '../CountriesCountWidget';
import useReportsStats from "../../hooks/reports-stats";


// Data
import reportsBarChartData from './data/reportsBarChartData';
import reportsLineChartData from './data/reportsLineChartData';
import ReportsRateWidget from '../ReportsRateWidget';


export default function Dashboard() {
  const { fetchInRange } = useReportsStats();
  useEffect(() => {
    const to = new Date();
    const from = new Date(to.getTime() - 1000 * 60 * 60 * 24 * 5);
    fetchInRange(from, to);
  }, []);

  const { sales, tasks } = reportsLineChartData;

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
        {/*<Grid container spacing={3}>*/}
        {/*  <Grid item xs={12} md={6} lg={3}>*/}
        {/*    <ReportsAmountWidget />*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={12} md={6} lg={3}>*/}
        {/*    <MDBox mb={1.5}>*/}
        {/*      <ComplexStatisticsCard*/}
        {/*        icon="leaderboard"*/}
        {/*        title="Today's Users"*/}
        {/*        count="2,300"*/}
        {/*        percentage={{*/}
        {/*          color: "success",*/}
        {/*          amount: "+3%",*/}
        {/*          label: "than last month",*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    </MDBox>*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={12} md={6} lg={3}>*/}
        {/*    <MDBox mb={1.5}>*/}
        {/*      <ComplexStatisticsCard*/}
        {/*        color="success"*/}
        {/*        icon="store"*/}
        {/*        title="Revenue"*/}
        {/*        count="34k"*/}
        {/*        percentage={{*/}
        {/*          color: "success",*/}
        {/*          amount: "+1%",*/}
        {/*          label: "than yesterday",*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    </MDBox>*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={12} md={6} lg={3}>*/}
        {/*    <MDBox mb={1.5}>*/}
        {/*      <ComplexStatisticsCard*/}
        {/*        color="primary"*/}
        {/*        icon="person_add"*/}
        {/*        title="Followers"*/}
        {/*        count="+91"*/}
        {/*        percentage={{*/}
        {/*          color: "success",*/}
        {/*          amount: "",*/}
        {/*          label: "Just updated",*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    </MDBox>*/}
        {/*  </Grid>*/}
        {/*</Grid>*/}
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}
