import { ApolloServer } from "@apollo/server"

async function createGraphQlServer() {
    const gqlServer = new ApolloServer({
        typeDefs: ``,
        resolvers: {
            Query: {
                
            },
            Mutation:{
                
            }
        }
    })

    await gqlServer.start();
    return gqlServer;
}

export default createGraphQlServer;