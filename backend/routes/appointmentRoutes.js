const express = require("express");
const {
  makeAppointment,
  getAppointment,
} = require("../controllers/appointmentsController");
const { fetchDoctors } = require("../controllers/appointmentsController");
const router = express.Router();

router.route("/:city").get(fetchDoctors);
router.post("/appointment", makeAppointment);
router.route("/appointment/:doctorId").get(getAppointment);

module.exports = router;
