const asyncHandler = require("express-async-handler");
const Disease = require("../models/diseaseModel");

const getDiseases = asyncHandler(async (req, res) => {
  const { query } = req.body;

  var regex = query.map((q) => new RegExp(["^", q, "$"].join(""), "i"));

  const disease = await Disease.find({
    $or: [
      { name: { $regex: query.join(" "), $options: "i" } },
      { symptoms: { $all: regex } },
    ],
  });

  if (disease) {
    res.json(disease);
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = getDiseases;
