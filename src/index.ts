import express, { Request, Response } from "express";
import os from 'os'

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';

async function main() {
    const app = express();
    const gqlServer = new ApolloServer({
        typeDefs: `
        type Query{
        hello:String 
        }`,
        resolvers: {
            Query: {
                hello: () => "Hello!, GraphQl Server"
            }
        }
    })

    await gqlServer.start()
    app.use(express.json());
    app.use('/graphql', expressMiddleware(gqlServer))
    const PORT = process.env.PORT || 8200;
    app.use(express.json());

    app.get('/', (req: Request, res: Response) => {
        const roralCpu = os.cpus().length;
        console.log("Total CPU: ", roralCpu)
        res.send("Ok")
    })

    app.listen(PORT, () => {
        console.log("Server is running on 8200")
    })
}
main();