import { useMemo } from 'react';
import useReportsStats from '../../hooks/reports-stats';
import MDBox from '../../mdb/components/MDBox';
import ReportsLineChart from '../../mdb/components/Charts/LineCharts/ReportsLineChart';


export default function CategoriesBreakdownWidget() {
  const { stats } = useReportsStats();

  const data = useMemo(() => {
    const labels: string[] = [];
    const data: number[] = [];
    for (const [ category, value ] of Object.entries(stats?.categoriesBreakdown ?? {})) {
      labels.push(category);
      data.push(value);
    }
    return { labels, datasets: {  label: 'Requests', data } };
  }, [stats?.categoriesBreakdown]);

  return <MDBox mb={3}>
    <ReportsLineChart
      color="primary"
      title="Breakdown by category"
      date="updated just now"
      chart={data}
    />
  </MDBox>
}
