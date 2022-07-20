const express = require("express");
const getDiseases = require("../controllers/diseasesController");
const { protect } = require("../middleware/authMiddleware.js");
const router = express.Router();

router.route("/").get(getDiseases);

module.exports = router;