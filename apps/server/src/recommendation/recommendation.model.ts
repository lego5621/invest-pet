import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Recommendation {
  @Field()
  strongBuy: number;

  @Field()
  buy: number;

  @Field()
  hold: number;

  @Field()
  sell: number;

  @Field()
  strongSell: number;

  @Field()
  period: string;
}
