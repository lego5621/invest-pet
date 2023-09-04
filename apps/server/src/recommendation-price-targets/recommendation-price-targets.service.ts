import { Injectable } from '@nestjs/common';
import yahooFinance from 'yahoo-finance2';

@Injectable()
export class RecommendationPriceTargetsService {
  async getRecommendationPriceTargets(ticker: string) {
    const quote = await yahooFinance.quoteSummary(ticker, {
      modules: ['financialData'],
    });

    const recommendationPriceTargets = {
      targetHighPrice: quote.financialData?.targetHighPrice,
      targetLowPrice: quote.financialData?.targetLowPrice,
      targetMedianPrice: quote.financialData?.targetMedianPrice,
      numberOfAnalystOpinions: quote.financialData?.numberOfAnalystOpinions,
      recommendationKey: quote.financialData?.recommendationKey,
      financialCurrency: quote.financialData?.financialCurrency,
    };

    return recommendationPriceTargets;
  }
}
