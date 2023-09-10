import { ObjectType, Field } from '@nestjs/graphql';

// @ObjectType()
// export class InvestIdeas {
//   @Field()
//   duration: number;

//   @Field()
//   estimatedIncome: number;
// }

@ObjectType()
export class MainList {
  @Field()
  ticker: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field()
  name: string;

  @Field()
  recommend: string;

  @Field()
  targetPrice: number;

  @Field()
  price: number;

  @Field()
  description: string;

  // @Field()
  // investIdeas: [InvestIdeas];
}
