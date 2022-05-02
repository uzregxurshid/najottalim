const { gql } = require("apollo-server-core");

const typeDefs = gql`
  type Restaurants {
    id: ID!
    name: String!
    description: String!
    image: String!
    branches: [Branches!]!
  }

  type Foods {
    id: ID!
    name: String!
    description: String!
    image: String!
    branchId: ID!
    price: Int!
  }

  type Branches {
    id: ID!
    location: String!
    image: String!
    restaurantId: String
    foods: [Foods!]!
  }

  

  type Order {
    id: ID!
    foodId: ID!
    count: Int!
    name: String!
    phone: String!
    price: Int!
    createdAt: String!
  }

  type Query {
    restaurants: [Restaurants!]!
    branches: [Branches!]!
    foods: [Foods!]!
    restaurant(id: ID!): Restaurants!
    branch(id: ID!): Branches!
    food(id: ID!): Foods!
    orders: [Order!]!
  }

  type Mutation {
    createFood( name: String!, description: String!, image: String!, price: Int!, branchId: ID!): Foods!
    deleteFood(id: ID!): String!
    editFood(id: ID!, name: String!, description: String!, image: String!, price: Int!, branchId: ID!): String!

    createOrder( foodId: ID!, count: Int!, name: String!, phone: String!, price: Int!): Order!
   
    createBranch( location: String!, image: String!, restaurantId: ID!): Branches!
    deleteBranch( id: ID!): String!
    editBranch( id: ID!, location: String!, image: String!, restaurantId: ID!): String!

    createRestaurant( name: String!, description: String!, image: String!): Restaurants!
    deleteRestaurant( id: ID!): [Restaurants!]!
    editRestaurant( id: ID!, name: String!, description: String!, image: String!): [Restaurants!]!
  }

  
`;  

module.exports = typeDefs;

