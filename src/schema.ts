import { buildSchema } from "type-graphql";
import { GraphQLSchema } from "graphql" 

import { UserResolver} from './graphql/user/user.resolvers'
import { ProfileResolver} from './graphql/profile/profile.resolvers'


const getSchema = () => {
  return new Promise<GraphQLSchema>(async (resolve) => {
    const schema = await buildSchema({
      resolvers: [UserResolver, ProfileResolver],
    })
    resolve(schema);
  })
}

export default getSchema