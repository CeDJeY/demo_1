import useReportsStats from '../../hooks/reports-stats';
import MDBox from '../../mdb/components/MDBox';
import ComplexStatisticsCard from '../../mdb/components/Cards/StatisticsCards/ComplexStatisticsCard';


export default function CountriesCountWidget() {
  const { stats } = useReportsStats();
  return <MDBox mb={1.5}>
    <ComplexStatisticsCard
      color="success"
      icon="weekend"
      title="Countries count"
      count={stats?.countries ?? '...'}
      percentage={{
        color: 'success',
        amount: '',
        label: '',
      }}
    />
  </MDBox>
}
