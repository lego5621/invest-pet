import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Price {
  @Field()
  date: string;

  @Field()
  close: number;
}
