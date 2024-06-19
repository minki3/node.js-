const express = require("express");
const User = require("../models/user");
const Post = require("../models/post");

const router = express.Router();

router.get("/user/post", async (req, res) => {
  const query = req.query;
  console.log(query);
  const findPost = await User.findAll({
    include: [
      {
        model: Post,
        where: { userName: query.name },
      },
    ],
  });

  if (findPost) {
    res.json(findPost);
  } else {
    res.status(404);
  }
});

module.exports = router;
