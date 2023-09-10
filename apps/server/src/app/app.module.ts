import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule } from '@nestjs/cache-manager';
import { EarningsService } from '../earnings';
import { RevenueService } from '../revenue';
import { PriceService } from '../price';
import { RecommendationService } from '../recommendation';
import { RecommendationPriceTargetsService } from '../recommendation-price-targets';
import { InfoSummaryService } from '../info-summary';
import { MainListService } from '../main-list';
import { SearchService } from '../search';
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
    MainListService,
    SearchService,
  ],
})
export class AppModule {}
