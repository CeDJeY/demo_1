import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportsService {
  /**
   * Returns a list of reports.
   */
  public getReports(): Demo.Report[] {
    return [{
      userAgent: 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/13.1058',
      category: 'category 71',
      countryid: 'ca',
      creationdate: 1652696989789.922,
      id: '32b1bf18-6685-4043-9d7a-0c25c928aa86',
      clientid: '0f1cf6dc-ec41-4c33-97a0-e2fff4648ed5',
      subcategory: 'subcategory 21',
    }, {
      userAgent: 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/13.1058',
      category: 'category 71',
      countryid: 'il',
      creationdate: 1651281626947,
      id: '32b1bf18-6685-4043-9d7a-0c25c928aa86',
      clientid: '0f1cf6dc-ec41-4c33-97a0-e2fff4648ed5',
      subcategory: 'subcategory 21',
    }]
  }

}
