const express = require("express");
const router = express.Router();
const Animals = require("../models/animal");

router.get("/animals", async (req, res) => {
  const animals = await Animals.findAll();
  res.json(animals);
});

module.exports = router;
