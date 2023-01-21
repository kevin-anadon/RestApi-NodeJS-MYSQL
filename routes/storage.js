const express = require("express");
const router = express.Router();

//TODO http://localhost/storage GET, POST, PUT, DELETE

const {
  getStorages,
  getStorage,
  createStorage,
  updateStorage,
  deleteStorage,
} = require("../controllers/storage");

router.get("/", getStorages);
router.get("/:id", getStorage);
router.post("/", createStorage);
router.put("/:id", updateStorage);
router.delete("/:id", deleteStorage);

module.exports = router;
