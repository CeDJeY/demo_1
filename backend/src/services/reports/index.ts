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

  private _inRange({ from, to }: Demo.Range, value: number): boolean {
    return value >= from && value <= to;
  }

}