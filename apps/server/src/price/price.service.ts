import { Injectable } from '@nestjs/common';
import yahooFinance from 'yahoo-finance2';
import { getQuoteDate } from './price.helpers';

type Interval = '1d' | '1wk' | '1mo' | undefined;


@Injectable()
export class PriceService {
  async getPrice(ticker: string) {
    const queryOptions = {
      period1: getQuoteDate(),
      interval: '1d' as Interval,
    };

    const price = await yahooFinance.historical(ticker, queryOptions);

    return price;
  }
}
