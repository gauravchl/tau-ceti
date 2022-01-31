import { Router } from "express";
import { addReview, getReviews } from "./controllers/reviews";
import { addProduct, getProducts } from "./controllers/products";

const router = Router();

router.get("/", (req, res) => res.send("Tau Ceti"));
router.get("/reviews", getReviews);
router.post("/review", addReview);
router.get("/products", getProducts);
router.post("/product", addProduct);

export default router;
