import express from "express";
import cors from "cors";
const router = express.Router();
router.use(cors());

import testData from "../test/books.json";

router.get("/books", (req, res) => {
  res.send({ books: testData });
});

export default router;
