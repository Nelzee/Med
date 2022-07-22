const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const diseaseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    symptoms: {
      type: Array,
      required: false,
    },
    commonTestsAndProcedures: {
      type: Array,
      required: false,
    },
    commonMedications: {
      type: Array,
      required: false,
    },
    details: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Disease = mongoose.model("Disease", diseaseSchema);

module.exports = Disease;
