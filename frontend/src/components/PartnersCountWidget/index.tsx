import useReportsStats from '../../hooks/reports-stats';
import MDBox from '../../mdb/components/MDBox';
import ComplexStatisticsCard from '../../mdb/components/Cards/StatisticsCards/ComplexStatisticsCard';


export default function PartnersCountWidget() {
  const { stats } = useReportsStats();
  return <MDBox mb={1.5}>
    <ComplexStatisticsCard
      icon="business"
      title="Partner count"
      count={stats?.partners ?? '...'}
      percentage={{
        color: 'success',
        amount: '',
        label: 'TODO !!!!!',
      }}
    />
  </MDBox>
}
