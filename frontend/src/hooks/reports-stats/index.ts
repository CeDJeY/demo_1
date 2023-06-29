import { useContext } from 'react';
import ReportsStatsContext from '../../contexts/reports-stats';


export default function useReportsStats(): Demo.Context.ReportsStats {
  return useContext(ReportsStatsContext);
}
