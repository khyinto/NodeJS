const express = require("express");
const router = express.Router();
const utils = require("../lib/utils");

// Get / 라우터
router.get("/", (req, res) => {
  res.send("Hello User!");
});
router.post("/", (req, res) => {
  const json = JSON.parse(JSON.stringify(req.body));
  console.log(json);

  const result = {
    success: "true",
  };
  utils.send(res, result);
});

module.exports = router;
