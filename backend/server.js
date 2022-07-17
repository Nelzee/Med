const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const diseasesFile = require("./data/refinedDiseases.json");
const fs = require("fs");

const diseasesArr = [];
let count = 0;

// for (disease in diseasesFile) {
//   let = start = true;
//   diseasesArr.push({
//     name: diseasesFile[disease]["name"],
//     symptoms: [],
//     commonTestsAndProcedures: [],
//     commonMedications: [],
//     details: "",
//   });
//   for (field in diseasesFile[disease]) {
//     if (diseasesFile[disease][field].includes('"symptoms"')) {
//       const temp = diseasesFile[disease][field]
//         .replace('"symptoms"', "")
//         .replace('"', "")
//         .replace('"', "")
//         .replace(":", "")
//         .replace("{", "")
//         .replace("}", "")
//         .replace("[", "")
//         .replace("]", "");

//       isNaN(temp) && diseasesArr[count]["symptoms"].push(temp);
//     } else if (
//       diseasesFile[disease][field].includes('"commonTestsAndProcedures"')
//     ) {
//       diseasesArr[count]["commonTestsAndProcedures"].push(
//         diseasesFile[disease][field]
//           .replace('"commonTestsAndProcedures"', "")
//           .replace('"', "")
//           .replace('"', "")
//           .replace(":", "")
//           .replace("{", "")
//           .replace("}", "")
//           .replace("[", "")
//           .replace("]", "")
//       );
//     } else if (diseasesFile[disease][field].includes('"commonMedications"')) {
//       diseasesArr[count]["commonMedications"].push(
//         diseasesFile[disease][field]
//           .replace('"commonMedications"', "")
//           .replace('"', "")
//           .replace('"', "")
//           .replace(":", "")
//           .replace("{", "")
//           .replace("}", "")
//           .replace("[", "")
//           .replace("]", "")
//       );
//     } else if (diseasesFile[disease][field] !== "") {
//       if (
//         diseasesFile[disease][field].includes("The most commonly prescribed")
//       ) {
//         start = false;
//       }
//       if (start) {
//         diseasesArr[count]["details"] += diseasesFile[disease][field]
//           .replace("\t", "")
//           .replace("\t", "");
//       }
//     }
//   }
//   count++;
// }

// fs.writeFile(
//   "./refinedDiseases.json",
//   JSON.stringify(diseasesArr, null, 2),
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("successfully written");
//     }
//   }
// );

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(diseasesFile);
});

app.get("/api/diseases", (req, res) => {
  res.json(notes);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server started on PORT 5000"));
