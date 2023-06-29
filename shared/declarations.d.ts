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

  interface CountResponse {
    count: number;
  }
}
