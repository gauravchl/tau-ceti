import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Review {
    rating: Int
    review: String
    id: Int
    productId: Int
    createdAt: String
    updatedAt: String
  }

  type Product {
    id: Int
    title: String
    author: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    reviews: [Review]
    products: [Product]
  }

  type Mutation {
    addReview(rating: Int!, review: String!, productId: Int!): Review
  }

  type Subscription {
    reviewAdded: Review
  }
`;

export default typeDefs;
