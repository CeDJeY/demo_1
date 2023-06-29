import useReportsStats from '../../hooks/reports-stats';
import MDBox from '../../mdb/components/MDBox';
import ComplexStatisticsCard from '../../mdb/components/Cards/StatisticsCards/ComplexStatisticsCard';


export default function ReportsCountWidget() {
  const { stats } = useReportsStats();
  return <MDBox mb={1.5}>
    <ComplexStatisticsCard
      color="dark"
      icon="description"
      title="Reports amount"
      count={stats?.reports ?? '...'}
      percentage={{
        color: 'success',
        amount: '',
        label: '',
      }}
    />
  </MDBox>
}
