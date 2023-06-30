declare namespace Demo {
  interface Report {
    userAgent: string;
    category: string;
    countryid: string;
    creationdate: number;
    id: string;
    clientid: string;
    subcategory: string;
  }

  interface Client {
    password: string;
    login: string;
    logo: string;
    creationdate: number;
    id: string;
  }

  interface Range {
    from: number;
    to: number;
  }

  interface ReportsStats {
    reports: number;
    partners: number;
    countries: number;
    rate: number;
    weekdayBreakdown: Record<string, number>;
    countriesBreakdown: Record<string, number>;
    categoriesBreakdown: Record<string, number>;
  }
}
