const express = require("express");
const Animal = require("../models/animal");

const router = express.Router();

router.post("/animals/send", async (req, res) => {
  const data = await req.body;
  console.log(data);
  Animal.create(data).then((data) => res.send(data));
  // res.send("성공");
});

module.exports = router;
