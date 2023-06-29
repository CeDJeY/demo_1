import useReportsStats from '../../hooks/reports-stats';
import MDBox from '../../mdb/components/MDBox';
import ComplexStatisticsCard from '../../mdb/components/Cards/StatisticsCards/ComplexStatisticsCard';


export default function ReportsAmountWidget() {
  const { stats } = useReportsStats();
  return <MDBox mb={1.5}>
    <ComplexStatisticsCard
      color="dark"
      icon="weekend"
      title="Bookings"
      count={stats?.reports ?? '...'}
      percentage={{
        color: "success",
        amount: "+55%",
        label: "than lask week",
      }}
    />
  </MDBox>
}
