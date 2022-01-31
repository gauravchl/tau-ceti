import { Router } from "express";
import { addReview, getReviews } from "./controllers/reviews";

const router = Router();

router.get("/", (req, res) => res.send("Tau Ceti"));
router.get("/reviews", getReviews);
router.post("/review", addReview);

export default router;
