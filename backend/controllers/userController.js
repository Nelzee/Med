const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");
const generateToken = require("../utils/generateToken.js");

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  const {
    credentials: { email, password },
  } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      idNumber: user.idNumber,
      DOB: user.DOB,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

//@description     Register new user
//@route           POST /api/users/
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { credentials } = req.body;

  const email = credentials["email"];
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404).json({
      message: "user already exists",
    });
    throw new Error("User already exists");
  }

  const user = await User.create(credentials);

  if (user) {
    res.status(201).json({
      message: "registration successful",
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @desc    GET user profile
// @route   GET /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.pic = req.body.pic || user.pic;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      pic: updatedUser.pic,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});
const registerOrgans = asyncHandler(async (req, res) => {
  const user = await User.findById(req.body.id);

  if (user) {
    user.organDonor = true;
    user.organs = req.body.organs;

    const updatedUser = await user.save();

    res.json({ message: "registration successful" });
  } else {
    res.status(404);
    throw new Error("ragistration failed");
  }
});
const getOrganDonors = asyncHandler(async (req, res) => {
  const organdonors = await User.find({ organDonor: true });

  if (organdonors) {
    res.json(organdonors);
  } else {
    res.status(404);
    throw new Error("ragistration failed");
  }
});

module.exports = {
  authUser,
  updateUserProfile,
  registerUser,
  registerOrgans,
  getOrganDonors,
};
