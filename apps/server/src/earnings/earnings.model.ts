import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Earnings {
  @Field()
  year: number;

  @Field()
  earnings: number;
}
