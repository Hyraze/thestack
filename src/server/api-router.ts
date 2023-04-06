import express from "express"

const router = express.Router();

import testData from "../test/books.json"

router.get("/books", (req, res) => {
    res.send(testData)
})

export default router