import express from "express";
import cors from "cors";
import { connectClient } from "./db";
const router = express.Router();
router.use(cors());

router.get("/books", async (req, res) => {
  const client = await connectClient();

  const books = await client
    .collection("books")
    .find()
    .project({
      id: 1,
      description: 1,
      author: 1,
      title: 1,
      _id:0
    })
    .toArray();

  res.send({ books });
});

router.get("/books/:bookId", async (req, res) => {
  const client = await connectClient();
  const book = await client.collection("books").findOne({
    id: req.params.bookId,
  });
  res.send({ book });
});

export default router;
