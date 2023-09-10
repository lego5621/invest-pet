import { Injectable } from '@nestjs/common';
import yahooFinance from 'yahoo-finance2';
import { MainList } from './main-list.model';

@Injectable()
export class MainListService {
  async getList(): Promise<MainList[]> {
    const trendingSymbols = (
      await yahooFinance.trendingSymbols('US', { count: 30, lang: 'en-US' })
    ).quotes.filter((symbol) => symbol.symbol.length < 6);

    const results = await Promise.all(
      trendingSymbols.map(async (symbol) => {
        const result = await yahooFinance.quoteSummary(symbol.symbol, {
          modules: ['price', 'assetProfile', 'financialData'],
        });

        if (
          symbol.symbol &&
          result.price?.longName &&
          result.financialData?.recommendationKey &&
          result.financialData?.targetMedianPrice &&
          result.price?.regularMarketPrice &&
          result.assetProfile?.longBusinessSummary
        ) {
          return {
            ticker: symbol.symbol,
            avatar: undefined,
            name: result.price.longName,
            recommend: result.financialData.recommendationKey,
            targetPrice: result.financialData.targetMedianPrice,
            price: result.price.regularMarketPrice,
            description: result.assetProfile.longBusinessSummary,
          };
        }
      }),
    );

    return results.filter((el) => el !== undefined).slice(0, 6) as MainList[];
  }
}
