const express = require("express");
const { Post } = require("../models");

const router = express.Router();

router.post("/post", async (req, res) => {
  try {
    const request = await req.body;
    console.log(request);
    Post.create(request).then(() => res.send("성공"));
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

module.exports = router;
