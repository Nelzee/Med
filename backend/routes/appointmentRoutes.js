const express = require("express");
const { fetchDoctors } = require("../controllers/appointmentsController");
const router = express.Router();

router.route("/:city").get(fetchDoctors);

module.exports = router;
