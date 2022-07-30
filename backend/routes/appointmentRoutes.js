const express = require("express");
const {
  makeAppointment,
  getAppointment,
  approveAppointment,
  getApprovedAppointments,
  deleteAppointment,
} = require("../controllers/appointmentsController");
const { fetchDoctors } = require("../controllers/appointmentsController");
const router = express.Router();

router.route("/:city").get(fetchDoctors);
router.route("/approved/:id").get(getApprovedAppointments);
router.post("/appointments", makeAppointment);
router.put("/:id", approveAppointment);
router.route("/appointment/:doctorId").get(getAppointment);
router.route("/delete/:id").delete(deleteAppointment);

module.exports = router;
