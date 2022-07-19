const asyncHandler = require("express-async-handler");

diseases = require("../data/refinedDiseases.json");

const getDiseases = asyncHandler(async (req, res) => {
  res.json(diseases);
});

module.exports = getDiseases;
