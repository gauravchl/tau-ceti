import Reviews from "../models/reviews";

import { pubsub } from "../resolvers/index";

export const addReview = async (req, res) => {
  try {
    if (!req.body) throw new Error("Invalid request");
    const { rating, review, productId } = req.body;
    const item = await Reviews.create({ rating, review, productId });
    res.send({ data: item.toJSON(), success: true });
    pubsub.publish("REVIEW_ADDED", { reviewAdded: item.toJSON() });
  } catch (err) {
    res.status(500).json({
      code: 500,
      errorMessage: err.message,
    });
  }
};

export const getReviews = async (req, res) => {
  try {
    const reviews = await Reviews.findAll();
    res.send({ data: reviews });
  } catch (err) {
    res.status(500).json({
      code: 500,
      errorMessage: err.message,
    });
  }
};
