const express = require("express");

const router = express.Router();

router.post("/patName", (req, res) => {
  const body = req.body;
  console.log(body);
  res.status(200).send("success");
});

module.exports = router;
