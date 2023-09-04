import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule } from '@nestjs/cache-manager';
import { EarningsService } from '../earnings/earnings.service';
import { RevenueService } from '../revenue/revenue.service';
import { PriceService } from '../price/price.service';
import { RecommendationService } from '../recommendation/recommendation.service';
import { RecommendationPriceTargetsService } from '../recommendation-price-targets/recommendation-price-targets.service';
import { InfoSummaryService } from '../info-summary/info-summary.service';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    CacheModule.register(),
  ],
  providers: [
    AppResolver,
    EarningsService,
    RevenueService,
    PriceService,
    RecommendationService,
    RecommendationPriceTargetsService,
    InfoSummaryService,
  ],
})
export class AppModule {}
