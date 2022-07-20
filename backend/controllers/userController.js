const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");
const generateToken = require("../utils/generateToken.js");

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    res.json({
      _id: "3232",
      name: "Nelson",
      email: email,
      isAdmin: true,
      pic: "user",
      token: generateToken(82742),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }

  // const user = await User.findOne({ email });

  // if (user && (await user.matchPassword(password))) {
  //   res.json({
  //     _id: user._id,
  //     name: user.name,
  //     email: user.email,
  //     isAdmin: user.isAdmin,
  //     pic: user.pic,
  //     token: generateToken(user._id),
  //   });
  // } else {
  //   res.status(401);
  //   throw new Error("Invalid Email or Password");
  // }
});

//@description     Register new user
//@route           POST /api/users/
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, password } = req.body;
  console.log("backend envoked");

  const userExists = await User.findOne({ name });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
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

module.exports = { authUser, updateUserProfile, registerUser };
