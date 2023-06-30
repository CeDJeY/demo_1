import { useMemo } from 'react';
import useReportsStats from '../../hooks/reports-stats';
import MDBox from '../../mdb/components/MDBox';
import ReportsLineChart from '../../mdb/components/Charts/LineCharts/ReportsLineChart';


const DaysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function WeekdayBreakdownWidget() {
  const { stats } = useReportsStats();

  const data = useMemo(() => {
    const data = stats?.weekdayBreakdown
      ? DaysNames.map((_, i) => stats.weekdayBreakdown[i] ?? 0)
      : [];
    return { labels: DaysNames, datasets: {  label: "Requests", data } };
  }, [stats?.weekdayBreakdown]);

  return <MDBox mb={3}>
    <ReportsLineChart
      color="success"
      title="Weekday breakdown"
      date="updated just now"
      chart={data}
    />
  </MDBox>
}
