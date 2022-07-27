const asyncHandler = require("express-async-handler");
const Appointment = require("../models/appointmentModel.js");
const User = require("../models/userModel.js");
const generateToken = require("../utils/generateToken.js");

const fetchDoctors = asyncHandler(async (req, res) => {
  const city = req.params.city;
  const doctors = await User.find({ city });

  if (doctors) {
    res.json(doctors);
  } else {
    res.status(404);
    throw new Error("Not Found");
  }
});

const makeAppointment = asyncHandler(async (req, res) => {
  const {
    appointment: { userId: user, doctorId: doctor, details },
  } = req.body;

  const userExists = await Appointment.findOne({ user, doctor });

  if (userExists) {
    res.status(404).json({
      message: "you already have an appointment with this doctor",
    });
    throw new Error("you already have an appointment with this doctor");
  }

  const appointment = await Appointment.create({ doctor, user, details });

  if (appointment) {
    res.status(201);
  } else {
    res.status(400);
    throw new Error("appointment failed");
  }
});

const getAppointment = asyncHandler(async (req, res) => {
  const doctorId = req.params.doctorId;

  const appointment = await Appointment.find({ doctor: doctorId })
    .populate("user")
    .populate("doctor");

  if (appointment) {
    res.json(appointment);
  } else {
    res.status(400);
    throw new Error("appointment failed");
  }
});

module.exports = { fetchDoctors, makeAppointment, getAppointment };
