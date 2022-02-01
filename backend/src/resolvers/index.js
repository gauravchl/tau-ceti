import Reviews from "../models/reviews";

const resolvers = {
  Query: {
    reviews() {
      return Reviews.findAll();
    },
  },
};

export default resolvers;
