import { GraphQLServer } from 'graphql-yoga'
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
  });
server.start(() => console.log('Server is running on localhost:4000'))