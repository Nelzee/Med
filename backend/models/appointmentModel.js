const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const appointmentSchema = mongoose.Schema(
  {
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    details: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
