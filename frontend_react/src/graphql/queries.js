import { gql } from "@apollo/client";

export const GET_HOMEPAGE_DATA = gql`
  query {
    reviews {
      id
      rating
      review
      productId
    }
    products {
      id
      title
    }
  }
`;
