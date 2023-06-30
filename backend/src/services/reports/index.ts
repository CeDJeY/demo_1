import { Injectable } from '@nestjs/common';
import reportMocks from './mock';


const FULL_RANGE = { from: -Infinity, to: Infinity };

@Injectable()
export class ReportsService {
  /**
   * Return a count of reports within a range
   * @param range
   */
  public async countReports(range = FULL_RANGE): Promise<number> {
    // Async for the demo purposes
    return reportMocks.filter(({ creationdate }) => this._inRange(range, creationdate)).length;
  }

  /**
   * Return a count of reports within a range
   * @param range
   */
  public async countReportsPartners(range = FULL_RANGE): Promise<number> {
    // Async for the demo purposes
    return reportMocks
      .reduce((acc, { clientid, creationdate }) => {
        return this._inRange(range, creationdate) ? acc.add(clientid) : acc;
      }, new Set<string>())
      .size;
  }

  /**
   * Return a count of reports within a range
   * @param range
   */
  public async countReportsCountries(range = FULL_RANGE): Promise<number> {
    // Async for the demo purposes
    return reportMocks
      .reduce((acc, { countryid, creationdate }) => {
        return this._inRange(range, creationdate) ? acc.add(countryid) : acc;
      }, new Set<string>())
      .size;
  }

  /**
   * Return approximate reports rate per day
   * @param range
   */
  public async getReportsRate(range = FULL_RANGE): Promise<number> {
    // Async for the demo purposes
    const deltaRange = (range.to - range.from) / (1000 * 60 * 60 * 24);
    console.log(deltaRange)
    return isFinite(deltaRange) && deltaRange > 0 ? await this.countReports(range) / deltaRange : 0;
  }

  public async countByWeekday(range = FULL_RANGE): Promise<Record<string, number>> {
    return reportMocks.reduce((acc, { creationdate }) => {
      if (this._inRange(range, creationdate)) {
        const date = new Date(creationdate);
        const day = date.getDay();
        acc[day] = acc[day] ? acc[day] + 1 : 1;
      }
      return acc;
    }, {});
  }

  public async countByCountries(range = FULL_RANGE): Promise<Record<string, number>> {
    return reportMocks.reduce((acc, { countryid, creationdate }) => {
      if (this._inRange(range, creationdate)) {
        acc[countryid] = acc[countryid] ? acc[countryid] + 1 : 1;
      }
      return acc;
    }, {});
  }

  public async countByCategories(range = FULL_RANGE): Promise<Record<string, number>> {
    return reportMocks.reduce((acc, { category, creationdate }) => {
      if (this._inRange(range, creationdate)) {
        const categoryid = this._extractNumber(category);
        if (isFinite(categoryid)) {
          acc[categoryid] = acc[categoryid] ? acc[categoryid] + 1 : 1;
        }
      }
      return acc;
    }, {});
  }

  private _extractNumber(str: string): number | null {
    const match = str.match(/(\d+(\.\d+)?)/);
    return parseFloat(match[0]);
  }

  private _inRange({ from, to }: Demo.Range, value: number): boolean {
    return value >= from && value <= to;
  }

}
