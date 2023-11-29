import { ObjectType, Field, Int, ID } from "type-graphql";

@ObjectType()
export class Profile {
  @Field(() => ID)
  id!: string;

  @Field()
  userId!: string;

  @Field({ nullable: true })
  nickname?: string;

  @Field()
  createdAt!: string

  @Field()
  updatedAt!: string
}
