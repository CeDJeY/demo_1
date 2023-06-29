import axios from 'axios';
import { useState, useCallback } from 'react';
import ReportsStatsContext from '.';


export default function ReportsStatsProvider({ children }) {
  const [ stats, setStats ] = useState<Demo.ReportsStats | null>(null);

  const fetchInRange = useCallback(async (fromTime: Date, toTime: Date) => {
    try {
      // TODO: Use Date.toISOString() instead of Date.getTime() for better readability
      const url = `http://localhost:3055/api/reports/stats/${fromTime.getTime()}/${toTime.getTime()}`;
      const response = await axios.get(url);
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  }, []);

  const contextValue: Demo.Context.ReportsStats = {
    stats,
    fetchInRange,
  }

  return (
    <ReportsStatsContext.Provider value={contextValue}>
      { children }
    </ReportsStatsContext.Provider>
  );
}
