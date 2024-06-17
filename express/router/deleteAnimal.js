const express = require("express");
const Animals = require("../models/animal");
const router = express.Router();

router.delete("/animal/delete", async (req, res) => {
  const query = req.query;
  console.log(query);
  const deleteData = await Animals.destroy({ where: { id: Number(query.id) } });
  if (deleteData) {
    res.send("성공");
  } else {
    res.send("실패");
  }
});

module.exports = router;
