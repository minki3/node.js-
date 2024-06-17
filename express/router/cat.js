const express = require("express");
const router = express.Router();

router.get("/cat", (req, res) => {
  const id = req.query;
  console.log(id);

  res.send(`hello cat`);
});

module.exports = router;
