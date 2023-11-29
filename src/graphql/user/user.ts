import { ObjectType, Field, Int, ID } from "type-graphql";

@ObjectType()
export class User {
  @Field(() => ID)
  id!: string;

  @Field()
  email!: string;

  @Field({ nullable: false })
  role?: string;

  @Field({ nullable: true })
  profile?: string;
}
