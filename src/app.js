import {GraphQLServer} from 'graphql-yoga';
//import MongoClient from 'mongodb';
import {Query} from "./resolvers/Query.js";
import 'babel-polyfill';

  
/*const dbConnect = async ()=>{
    const uri = "mongodb+srv://stefani:contraseÃ±a@scluster-jlu1s.gcp.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    return client;
}*/

const startGraphql  = () => {
    const resolvers = { 
        Query,
    };

    //const context = {client};
    const server = new GraphQLServer({typeDefs : "src/schema.graphql", resolvers});
    server.start(() => console.log("Server listening"));
};
const runApp = async() =>{
    //const client = await dbConnect();
    try{
       
        //console.log("hola mundo");
        startGraphql();
    }catch(e){
       // client.close();
        console.log(e);
    }
};

runApp();
