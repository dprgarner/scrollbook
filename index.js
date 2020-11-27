const fs = require("fs");
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql(fs.readFileSync("./schema.gql", "utf-8"));

const resolvers = {
  Query: {
    hello: () => "world!",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: true,
  mockEntireSchema: false,
});

server.listen(3000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
