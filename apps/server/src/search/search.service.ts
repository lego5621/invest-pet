import { Injectable } from '@nestjs/common';
import yahooFinance from 'yahoo-finance2';
import { SearchItem } from './search.model';

@Injectable()
export class SearchService {
  async search(ticker: string): Promise<SearchItem[]> {
    const result = (
      await yahooFinance.search(ticker, {
        quotesCount: 10,
        enableCb: false,
        enableNavLinks: false,
        enableEnhancedTrivialQuery: false,
      })
    ).quotes
      .filter((el) => {
        return (
          el.isYahooFinance && el.typeDisp === 'Equity' && el.symbol.length < 5
        );
      })
      .map((el) => {
        return {
          name: el.shortname,
          ticker: el.symbol,
        };
      });

    return result;
  }
}
