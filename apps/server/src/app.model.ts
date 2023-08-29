import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Payload {
  @Field(() => Boolean)
  isCat: boolean;
}

@ObjectType()
export class AppData {
  @Field({ nullable: true })
  name?: string;

  @Field(() => Int)
  age: number;

  @Field(() => Payload)
  payload: Payload;
}
