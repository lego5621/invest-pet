import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class InfoSummary {
  @Field()
  avatar: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  recommendation: string;

  @Field()
  targerPrice: number;

  @Field()
  price: number;
}
