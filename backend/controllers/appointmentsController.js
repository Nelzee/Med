const asyncHandler = require("express-async-handler");
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

module.exports = { fetchDoctors };
