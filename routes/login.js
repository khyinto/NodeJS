const utils = require("../lib/utils");
const express = require("express");
const router = express.Router();

exports.Join = (req, res) => {
  const json = JSON.parse(JSON.stringify(req.body));
  console.log(json);

  const result = {
    success: "true",
  };
  utils.send(res, result);
};
