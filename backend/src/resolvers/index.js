import { PubSub } from "graphql-subscriptions";
import Reviews from "../models/reviews";
import Products from "../models/products";

const pubsub = new PubSub();

const resolvers = {
  Subscription: {
    reviewAdded: {
      subscribe: () => pubsub.asyncIterator(["REVIEW_ADDED"]),
    },
  },

  Query: {
    reviews() {
      return Reviews.findAll();
    },
    products() {
      return Products.findAll();
    },
  },
  Mutation: {
    addReview: async (parent, args) => {
      const { review, rating, productId } = args;
      const item = await Reviews.create({ rating, review, productId });
      const newReview = item.toJSON();
      pubsub.publish("REVIEW_ADDED", { reviewAdded: newReview });
      return newReview;
    },
  },
};

export default resolvers;
