import { gql } from '@apollo/client';

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

export const SUBMIT_REVIEW = gql`
  mutation AddReview($rating: Float!, $review: String!, $productId: Int!) {
    addReview(rating: $rating, review: $review, productId: $productId) {
      id
    }
  }
`;
