import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class SearchItem {
  @Field()
  name: string;

  @Field()
  ticker: string;
}

