import {MongoClient} from 'mongodb';
import {GraphQLServer} from "graphql-yoga";
import {Query} from "./resolvers/Query.js";
import "babel-polyfill";

const url = "mongodb+srv://username:password99@thecluster-mzag5.gcp.mongodb.net/test";

const dbConnect = async (url) => {
    const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
    await client.connect();
    return client;
}

const runGraphQLServer = (context) => {
    const resolvers = { 
        Query,
    }
    const server = new GraphQLServer({typeDefs : "./src/schema.graphql", resolvers, context});
    server.start(() => console.log("Server listening"));
}

const runApp = async () => {
    const client = await dbConnect(url);
    try {
        runGraphQLServer({client});
    } catch(e) {
        console.error(e);
        client.close();
    }
}

runApp();