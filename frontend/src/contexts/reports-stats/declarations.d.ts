declare namespace Demo {
  namespace Context {
    interface ReportsStats {
      stats: Demo.ReportsStats | null;
      fetchInRange(from: Date, to: Date): void;
    }
  }
}
