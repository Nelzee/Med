const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const cors = require("cors");
const PORT = process.env.PORT || 3500;
const diseasesFile = require("./data/refinedDiseases.json");

const userRoutes = require("./routes/userRoutes.js");
const diseasesRoutes = require("./routes/diseasesRoutes.js");
const appointmentRoutes = require("./routes/appointmentRoutes.js");
const dataDiseases = require("./data/cleaner");

dotenv.config();

connectDB();

const app = express(); // main thing

app.use(express.json()); // to accept json data

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

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use("/api/users", userRoutes);
app.use("/api/diseases", diseasesRoutes);
app.use("/api/appointments", appointmentRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
