import useReportsStats from '../../hooks/reports-stats';
import MDBox from '../../mdb/components/MDBox';
import ComplexStatisticsCard from '../../mdb/components/Cards/StatisticsCards/ComplexStatisticsCard';


export default function ReportsRateWidget() {
  const { stats } = useReportsStats();
  const count = stats?.hasOwnProperty('rate')
    ? +(stats.rate).toFixed(2)
    : '...';

  if (stats?.hasOwnProperty('rate') === false) return null;
  return <MDBox mb={1.5}>
    <ComplexStatisticsCard
      icon="av_timer"
      title="Reports rate"
      count={count}
      percentage={{
        color: 'success',
        amount: '',
        label: 'per day',
      }}
    />
  </MDBox>
}
