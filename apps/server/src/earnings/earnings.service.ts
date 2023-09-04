import { Injectable } from '@nestjs/common';
import yahooFinance from 'yahoo-finance2';

@Injectable()
export class EarningsService {
  async getEarnings(ticker: string) {
    const quote = await yahooFinance.quoteSummary(ticker, {
      modules: ['earnings'],
    });

    const earnings = quote.earnings?.financialsChart.yearly.map((year) => {
      return {
        earnings: year.earnings,
        year: year.date,
      };
    });

    return earnings;
  }
}
