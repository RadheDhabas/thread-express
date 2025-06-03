import express, { Request, Response } from "express";
import { expressMiddleware } from '@as-integrations/express5';
import createGraphQlServer from "./graphql";

async function main() {
    const app = express();

    const PORT = process.env.PORT || 8200;
    app.use(express.json());

    const gqlServer = await createGraphQlServer();
    app.use('/graphql', expressMiddleware(gqlServer))

    app.get('/', (req: Request, res: Response) => {
        res.send("Ok")
    })

    app.listen(PORT, () => {
        console.log("Server is running on 8200")
    })
}
main();