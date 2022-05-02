const { ApolloServer } = require("apollo-server");
const { sequelize, Branches, Restaurant, Foods } = require("./module/model/model");
const typeDefs = require("./module/schema/schema");
const resolvers = require("./module/resolvers/resolver");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");

const server = new ApolloServer({typeDefs,resolvers,
plugins: [
  ApolloServerPluginLandingPageGraphQLPlayground({
    codeTheme: "light"
  })
]
});

sequelize.sync({ force: false, logging:false });




server.listen(process.env.PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});