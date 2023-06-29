import ReportsStatsProvider from '../../contexts/reports-stats/provider';
import Dashboard from "../../components/Dashboard";


export default function DashboardLayout() {
  return (
    <ReportsStatsProvider>
      <Dashboard />
    </ReportsStatsProvider>
  );
}
