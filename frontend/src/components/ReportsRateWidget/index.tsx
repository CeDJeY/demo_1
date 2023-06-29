import useReportsStats from '../../hooks/reports-stats';
import MDBox from '../../mdb/components/MDBox';
import ComplexStatisticsCard from '../../mdb/components/Cards/StatisticsCards/ComplexStatisticsCard';


export default function ReportsRateWidget() {
  const { stats } = useReportsStats();
  return <MDBox mb={1.5}>
    <ComplexStatisticsCard
      icon="av_timer"
      title="Reports rate"
      count={stats?.rate ?? '...'}
      percentage={{
        color: 'success',
        amount: '',
        label: 'per day',
      }}
    />
  </MDBox>
}