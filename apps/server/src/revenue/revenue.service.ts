import { Injectable } from '@nestjs/common';
import yahooFinance from 'yahoo-finance2';

@Injectable()
export class RevenueService {
  async getRevenue(ticker: string) {
    const quote = await yahooFinance.quoteSummary(ticker, {
      modules: ['earnings'],
    });

    const revenue = quote.earnings?.financialsChart.yearly.map((year) => {
      return {
        revenue: year.revenue,
        year: year.date,
      };
    });

    return revenue;
  }
}
