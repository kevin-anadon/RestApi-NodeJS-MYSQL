const express = require("express");
const router = express.Router();

//TODO http://localhost/tracks GET, POST, PUT, DELETE

const {
  getTracks,
  getTrack,
  createTrack,
  updateTrack,
  deleteTrack,
} = require("../controllers/tracks");

router.get("/", getTracks);
router.get("/:id", getTrack);
router.post("/", createTrack);
router.put("/:id", updateTrack);
router.delete("/:id", deleteTrack);

module.exports = router;
