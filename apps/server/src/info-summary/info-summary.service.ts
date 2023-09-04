import { Injectable } from '@nestjs/common';
import yahooFinance from 'yahoo-finance2';

@Injectable()
export class InfoSummaryService {
  async getInfoSummary(ticker: string) {
    const quote = await yahooFinance.quoteSummary(ticker, {
      modules: ['financialData', 'price'],
    });

    const infoSummary = {
      avatar: '',
      name: quote.price?.longName,
      description: '',
      recommendation: quote.financialData?.recommendationKey,
      targerPrice: quote.financialData?.targetMedianPrice,
      price: quote.financialData?.currentPrice,
    };

    return infoSummary;
  }
}
