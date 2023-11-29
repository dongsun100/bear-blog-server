import { Arg, Query, Resolver, Mutation } from "type-graphql";

// import { User } from "@src/graphql/user/User";
import { User } from "./user";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Resolver()
export class UserResolver {
  @Query((returns) => [User])
  async users() {
    const users = await prisma.user.findMany();
    console.log(users);

    return users;
  }

  @Mutation(() => User)
  async register(@Arg("email") email: string, @Arg("name") name: string) {
    const user = await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    return user;
  }
}
