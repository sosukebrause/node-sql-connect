const express = require("express");
const app = express();
const mysql = require("mysql");
// const colors = require("colors");
// const cowsay = require("cowsay");
const PORT = process.env.PORT || 3003;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client"));

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

const clientRoutes = require("./routes/client-routes");
const { static } = require("express");
app.use(clientRoutes);

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
