const express = require("express");
const router = express.Router();

router.get("/sound/:name", (req, res) => {
  const name = req.params.name;
  if (name === "dog") {
    res.json([{ sound: "멍멍" }]);
  } else if (name === "cat") {
    res.json([{ sound: "야용" }]);
  } else {
    res.json([{ sound: "알수없음" }]);
  }
});

module.exports = router;
