const express = require("express");
const {
  getDiseases,
  getDisease,
} = require("../controllers/diseasesController");
const { protect } = require("../middleware/authMiddleware.js");
const router = express.Router();

router.route("/").post(getDiseases);
router.route("/disease/:id").get(getDisease);

module.exports = router;
