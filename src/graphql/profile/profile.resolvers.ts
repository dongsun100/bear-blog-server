import { Arg, Query, Resolver, Mutation } from "type-graphql";

// import { User } from "@src/graphql/user/User";
import { Profile } from "./profile";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Resolver()
export class UserResolver {
  @Query((returns) => [Profile])
  async profiles() {
    const profiles = await prisma.profile.findMany();
    console.log(profiles);

    return profiles;
  }
}
