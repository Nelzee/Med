const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3500;
const diseasesFile = require("./data/refinedDiseases.json");

// Cross origin resource sharing
const whitelist = [
  "https://127.0.0.1:5000",
  "http://localhost:3500",
  "http://localhost:3000",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/notes", require("./routes/api/people"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
