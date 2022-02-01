import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Review {
    id: Int
  }

  type Query {
    reviews: [Review]
  }
`;

export default typeDefs;
