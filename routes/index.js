const express = require("express");
const router = express.Router();

// Get / 라우터
router.get("/", (req, res) => {
  res.send("Hello Express");
});
router.post("/", (req, res) => {
  const reqData = {
    idx: "11111",
  };

  res.send(reqData);
});

module.exports = router;
