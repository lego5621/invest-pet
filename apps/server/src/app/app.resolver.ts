import { Query, Resolver, Args } from '@nestjs/graphql';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject } from '@nestjs/common';
import { EarningsService, Earnings } from '../earnings';
import { RevenueService, Revenue } from '../revenue';
import { PriceService, Price } from '../price';
import { RecommendationService, Recommendation } from '../recommendation';
import {
  RecommendationPriceTargetsService,
  RecommendationPriceTargets,
} from '../recommendation-price-targets';
import { InfoSummaryService, InfoSummary } from '../info-summary';

@Resolver()
export class AppResolver {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly earningsService: EarningsService,
    private readonly revenueService: RevenueService,
    private readonly priceService: PriceService,
    private readonly recommendationService: RecommendationService,
    private readonly recommendationPriceTargetsService: RecommendationPriceTargetsService,
    private readonly infoSummaryService: InfoSummaryService,
  ) {}

  @Query(() => [Earnings])
  async earnings(@Args('ticker', { type: () => String }) ticker: string) {
    const cache = await this.cacheManager.get(`${ticker}.earnings`);

    if (cache) {
      return cache;
    }

    const earnings = await this.earningsService.getEarnings(ticker);

    await this.cacheManager.set(`${ticker}.earnings`, earnings);

    return earnings;
  }

  @Query(() => [Revenue])
  async revenue(@Args('ticker', { type: () => String }) ticker: string) {
    const cache = await this.cacheManager.get(`${ticker}.revenue`);

    if (cache) {
      return cache;
    }

    const revenue = await this.revenueService.getRevenue(ticker);

    await this.cacheManager.set(`${ticker}.revenue`, revenue);

    return revenue;
  }

  @Query(() => [Price])
  async price(@Args('ticker', { type: () => String }) ticker: string) {
    const cache = await this.cacheManager.get(`${ticker}.price`);

    if (cache) {
      return cache;
    }

    const price = await this.priceService.getPrice(ticker);

    await this.cacheManager.set(`${ticker}.price`, price);

    return price;
  }

  @Query(() => [Recommendation])
  async recommendation(@Args('ticker', { type: () => String }) ticker: string) {
    const cache = await this.cacheManager.get(`${ticker}.recommendation`);

    if (cache) {
      return cache;
    }

    const recommendation =
      await this.recommendationService.getRecommendation(ticker);

    await this.cacheManager.set(`${ticker}.recommendation`, recommendation);

    return recommendation;
  }

  @Query(() => RecommendationPriceTargets)
  async recommendationPriceTargets(
    @Args('ticker', { type: () => String }) ticker: string,
  ) {
    const cache = await this.cacheManager.get(
      `${ticker}.recommendationPriceTargets`,
    );

    if (cache) {
      return cache;
    }

    const recommendationPriceTargets =
      await this.recommendationPriceTargetsService.getRecommendationPriceTargets(
        ticker,
      );

    await this.cacheManager.set(
      `${ticker}.recommendationPriceTargets`,
      recommendationPriceTargets,
    );

    return recommendationPriceTargets;
  }

  @Query(() => InfoSummary)
  async infoSummary(@Args('ticker', { type: () => String }) ticker: string) {
    const cache = await this.cacheManager.get(`${ticker}.infoSummary`);

    if (cache) {
      return cache;
    }

    const infoSummary = await this.infoSummaryService.getInfoSummary(ticker);

    await this.cacheManager.set(`${ticker}.infoSummary`, infoSummary);

    return infoSummary;
  }
}
