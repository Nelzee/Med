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
  console.log(appointment);
  if (appointment) {
    res.status(201);
  } else {
    res.status(400);
    throw new Error("appointment failed");
  }
});

const getAppointment = asyncHandler(async (req, res) => {
  const doctorId = req.params.doctorId;

  const appointment = await Appointment.find({ doctor: doctorId }).populate(
    "user"
  );

  if (appointment) {
    res.json(appointment);
  } else {
    res.status(400);
    throw new Error("appointment failed");
  }
});

const getApprovedAppointments = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const appointments = await Appointment.find({
    user: id,
    approved: true,
  }).populate("doctor");

  if (appointments) {
    res.json(appointments);
  } else {
    res.status(400);
    throw new Error("appointment failed");
  }
});

const approveAppointment = asyncHandler(async (req, res) => {
  const { time, date } = req.body;

  try {
    const appointment = await Appointment.findById(req.params.id);

    if (appointment) {
      appointment.date = date;
      appointment.time = time;
      appointment.approved = true;

      const updatedAppointment = await appointment.save();
      res.json(updatedAppointment);
    } else {
      res.status(404);
      throw new Error("Appointment not found");
    }
  } catch (error) {}
});
const deleteAppointment = asyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    const appointment = await Appointment.findById(req.params.id);

    if (appointment) {
      await appointment.remove();
      res.json({ message: "note removed" });
    } else {
      res.status(404);
      throw new Error("Appointment not found");
    }
  } catch (error) {}
});

module.exports = {
  fetchDoctors,
  makeAppointment,
  getAppointment,
  approveAppointment,
  getApprovedAppointments,
  deleteAppointment,
};
