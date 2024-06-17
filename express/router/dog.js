const express = require("express");
const router = express.Router();

router.get("/dog/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`hello dog ${req.params.id}`);
});

module.exports = router;
