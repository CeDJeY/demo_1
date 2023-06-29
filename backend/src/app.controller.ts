import { Controller, Get, Param } from '@nestjs/common';
import { ReportsService } from '@services/reports';


@Controller('/api')
export class AppController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('/reports/count/:from/:to')
  // @UseGuards(AuthGuard('jwt')) Skip auth for the sake of simplicity
  // Skipping query params validation for the sake of simplicity
  public countReports(
    @Param('from') from,
    @Param('to') to,
  ): Demo.CountResponse {
    return {
      count: this.reportsService.countReports({ from, to })
    };
  }

  @Get('/reports/partners/count/:from/:to')
  // @UseGuards(AuthGuard('jwt')) Skip auth for the sake of simplicity
  // Skipping query params validation for the sake of simplicity
  public countReportsPartners(
    @Param('from') from: number,
    @Param('to') to: number,
  ): Demo.CountResponse {
    return {
      count: this.reportsService.countReportsPartners({ from, to })
    };
  }

  @Get('/reports/countries/count/:from/:to')
  // @UseGuards(AuthGuard('jwt')) Skip auth for the sake of simplicity
  // Skipping query params validation for the sake of simplicity
  public countReportsCountries(
    @Param('from') from: number,
    @Param('to') to: number,
  ): Demo.CountResponse {
    return {
      count: this.reportsService.countReportsCountries({ from, to })
    };
  }
}
