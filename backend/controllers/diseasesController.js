const asyncHandler = require("express-async-handler");
const Disease = require("../models/diseaseModel");

const getDiseases = asyncHandler(async (req, res) => {
  const { query } = req.body;

  var regex = query.map((q) => new RegExp(["^", q, "$"].join(""), "i"));

  const diseases = await Disease.find({
    $or: [
      { name: { $regex: query.join(" "), $options: "i" } },
      { symptoms: { $all: regex } },
    ],
  });

  if (diseases) {
    res.json(diseases);
  } else {
    res.status(401);
    throw new Error("Invalid query");
  }
});

const getDisease = asyncHandler(async (req, res) => {
  const { id } = req.body;

  const disease = await Disease.findById(id);

  if (disease) {
    res.json(disease);
  } else {
    res.status(401);
    throw new Error("invalid Id");
  }
});

module.exports = { getDiseases, getDisease };
