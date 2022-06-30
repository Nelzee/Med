const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server started on PORT 5000"));
