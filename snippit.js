//create this snippetconst mysql = require("mysql");
const express = require("express");
const { json } = require("express");
const app = express();
const PORT = 3000;

//create the thing to connect to
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "pw",
  database: "todo_db",
});
//Call in Express
app.use(express.urlencoded({ extended: true }));
app.use(express(json()));

//make the connection
connection.connect((err) => {
  if (err) throw err;
  console.log("Connection Successful");

  //Hitting the endpoint defined
  app.get("/", (req, res) => {
    console.log("Api was hit");

    res.send("a thing");
  });

  app.listen(PORT, () => {
    console.log(`Listening at: http://localhost:${PORT}`);
  });
  connection.end();
});
