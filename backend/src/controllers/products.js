import Products from "../models/products";

export const addProduct = async (req, res) => {
  try {
    if (!req.body) throw new Error("Invalid request");
    const { title, author } = req.body;
    const item = await Products.create({ title, author });
    res.send({ data: item.toJSON(), success: true });
  } catch (err) {
    res.status(500).json({
      code: 500,
      errorMessage: err.message,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Products.findAll();
    res.send({ data: products });
  } catch (err) {
    res.status(500).json({
      code: 500,
      errorMessage: err.message,
    });
  }
};
