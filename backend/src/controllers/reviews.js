import Reviews from "../models/reviews";

export const addReview = async (req, res) => {
  try {
    if (!req.body) throw new Error("Invalid request");
    const { rating, review } = req.body;
    const item = await Reviews.create({ rating, review });
    res.send({ data: item.toJSON(), success: true });
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
