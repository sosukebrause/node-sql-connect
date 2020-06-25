const express = require("express");
const app = express();
const mysql = require("mysql");
const colors = require("colors");
const cowsay = require("cowsay");
const PORT = 3003;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`listening at: http://localhost:${PORT}\n`);
});

// app.listen(PORT, () => {
//   console.log(
//     cowsay.say({
//       text:
//         "\n listening: ".bold +
//         `listening at: http://localhost:${PORT}\n`.rainbow,
//       e: "oO",
//       T: "U ",
//     })
//   );
// });
