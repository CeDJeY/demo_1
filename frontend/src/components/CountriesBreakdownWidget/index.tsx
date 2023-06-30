import { useMemo } from 'react';
import useReportsStats from '../../hooks/reports-stats';
import MDBox from '../../mdb/components/MDBox';
import ReportsBarChart from '../../mdb/components/Charts/BarCharts/ReportsBarChart';


export default function CountriesBreakdownWidget() {
  const { stats } = useReportsStats();

  const data = useMemo(() => {
    const labels: string[] = [];
    const data: number[] = [];
    for (const [ countryCode, value ] of Object.entries(stats?.countriesBreakdown ?? {})) {
      labels.push(countryCode);
      data.push(value);
    }
    return { labels, datasets: {  label: "Requests", data } };
  }, [stats?.weekdayBreakdown]);

  return <MDBox mb={3}>
    <ReportsBarChart
      color="info"
      title="Breakdown by countries"
      date="updated just now"
      chart={data}
    />
  </MDBox>
}
