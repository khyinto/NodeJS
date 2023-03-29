const express = require("express");
const router = express.Router();
const utils = require("../lib/utils");
const User = require("../models/user");

// Get / 라우터
router.get("/", (req, res) => {
  console.log("Hello User!");
  //res.send("Hello User!");
});
router.post("/", async (req, res) => {
  const json = JSON.parse(JSON.stringify(req.body));
  console.log("/ : " + json);

  const users = await User.findAll();

  //console.log(users);

  const result = {
    success: users,
    //success: "success",
  };
  utils.send(res, result);
});

/* 회원 가입 */
router.post("/join", async (req, res) => {
  /*
   nick / platforms / 
  */
  const json = JSON.parse(JSON.stringify(req.body));
  console.log("join : " + json);

  const users = await User.findAll();

  //console.log(users);

  const result = {
    success: users,
    //success: "success",
  };
  utils.send(res, result);
});

module.exports = router;
