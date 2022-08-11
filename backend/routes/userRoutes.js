const express = require("express");
const {
  authUser,
  registerUser,
  updateUserProfile,
  registerOrgans,
  getOrganDonors,
} = require("../controllers/userController.js");
const { protect } = require("../middleware/authMiddleware.js");
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);
router.route("/organs").post(registerOrgans);
router.route("/organdonors").post(getOrganDonors);

module.exports = router;
