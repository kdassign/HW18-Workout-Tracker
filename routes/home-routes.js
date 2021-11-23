const router = require("express").Router();
const path = require('path');

// GET /exercise
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/exercise.html'));
});

// GET /exercise?
router.get("/exercise?", (req, res) => {
  // location.search = "?id=" + workout._id;

  res.sendFile(path.join(__dirname, '/../public/exercise.html'));
});

// GET /stats
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/stats.html'));
});

module.exports = router;