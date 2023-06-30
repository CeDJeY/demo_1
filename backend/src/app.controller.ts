import { Controller, Get, Param } from '@nestjs/common';
import { ReportsService } from '@services/reports';


@Controller('/api')
export class AppController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('/reports/stats/:from/:to')
  // @UseGuards(AuthGuard('jwt')) Skip auth for the sake of simplicity
  // Skipping query params validation for the sake of simplicity
  public async getReportsStats(
    @Param('from') from,
    @Param('to') to,
  ): Promise<Demo.ReportsStats> {
    const range: Demo.Range = { from, to };
    // Skipping the range validation for the sake of simplicity
    const [
      reports, partners, countries, rate,
      weekdayBreakdown, countriesBreakdown, categoriesBreakdown
    ] = await Promise.all([
      this.reportsService.countReports(range),
      this.reportsService.countReportsPartners(range),
      this.reportsService.countReportsCountries(range),
      this.reportsService.getReportsRate(range),
      this.reportsService.countByWeekday(range),
      this.reportsService.countByCountries(range),
      this.reportsService.countByCategories(range),
    ]);
    return { reports, partners, countries, rate, weekdayBreakdown, countriesBreakdown, categoriesBreakdown };
  }
}
