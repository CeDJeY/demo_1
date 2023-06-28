import { Controller, Get } from '@nestjs/common';
import { ReportsService } from '@services/reports';


@Controller('/api')
export class AppController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('/reports')
  getHello(): Demo.Report[] {
    return this.reportsService.getReports();
  }
}
