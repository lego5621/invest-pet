import { Injectable } from '@nestjs/common';
import yahooFinance from 'yahoo-finance2';

@Injectable()
export class RecommendationService {
  async getRecommendation(ticker: string) {
    const quote = await yahooFinance.quoteSummary(ticker, {
      modules: ['recommendationTrend'],
    });

    const recommendation = quote.recommendationTrend?.trend.map((trend) => {
      const currentDate = new Date();
      currentDate.setDate(1);

      currentDate.setMonth(
        currentDate.getMonth() - Number(trend.period.replace(/\D/g, '')),
      );

      trend.period = currentDate.toLocaleDateString('ru-RU');

      return trend;
    });

    return recommendation;
  }
}
