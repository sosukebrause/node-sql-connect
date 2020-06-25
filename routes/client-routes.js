const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/home.html"));
});
router.get("/edit", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/home.html"));
});
router.get("/delete", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/home.html"));
});

module.exports = router;
