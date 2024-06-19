const express = require("express");
const { Animal } = require("../models");
const router = express.Router();

router.get("/animal/search", async (req, res) => {
  const query = req.query;
  console.log(query);
  const data = await Animal.findOne({ where: Number(query.id) });
  if (data) {
    res.json(data);
  } else {
    res.status(404).send("not found");
  }
});

module.exports = router;
