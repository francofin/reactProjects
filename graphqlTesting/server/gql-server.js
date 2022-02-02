const {ApolloServer} = require('apollo-server');
require('dotenv').config()

const PORT = process.env.PORT || 3001;

const typeDefs = `
    type Query{
        totalPosts: Int!
    }

`
const resolvers ={
    Query:{
        totalPosts:()=>42
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});


server.listen(PORT, () => {
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });