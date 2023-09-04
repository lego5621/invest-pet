import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Revenue {
  @Field()
  year: number;

  @Field()
  revenue: number;
}
