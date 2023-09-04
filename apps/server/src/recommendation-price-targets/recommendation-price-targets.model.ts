import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class RecommendationPriceTargets {
  @Field()
  targetHighPrice: number;

  @Field()
  targetLowPrice: number;

  @Field()
  targetMedianPrice: number;

  @Field()
  numberOfAnalystOpinions: number;
}
