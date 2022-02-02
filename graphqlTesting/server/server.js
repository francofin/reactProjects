const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const mongoose = require('mongoose');
const http = require('http');
const path = require('path');
const {makeExecutableSchema} = require('graphql-tools');
const {mergeTypeDefs, mergeResolvers} = require('@graphql-tools/merge');
const {loadFilesSync} = require('@graphql-tools/load-files');
require('dotenv').config()
const PORT = process.env.PORT || 3001;


const app = express();


const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname,"./typeDefs")));
const resolvers = mergeResolvers(loadFilesSync(path.join(__dirname,"./resolvers")));





  async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await server.start();
    server.applyMiddleware({ app });

    const db = async()=>{
        const success = await mongoose.connect(process.env.DATABASE, {})
            .then(() => {
                console.log("MongoDB Connected");
            })
            .catch((e) => console.log(e));
    }

    db();

    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log(
            `Server is ready at http://localhost:${PORT}${server.graphqlPath}`
        );
    });
        
}
startServer();