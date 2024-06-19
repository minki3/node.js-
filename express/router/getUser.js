const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/user", async (req, res) => {
  const getUser = await User.findAll();
  // console.log(getUser);

  if (getUser) {
    res.json(getUser);
  } else {
    res.status(404);
  }
});

module.exports = router;
