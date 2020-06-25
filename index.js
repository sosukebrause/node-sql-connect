const mysql = require("mysql");
const express = require("express");
const { json } = require("express");
const app = express();
const PORT = 3001;
const password = require("./password");

//create the thing to connect to
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: password,
  database: "top_songsDB",
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
    //put in the command to see the tables in the declared database
    //first arg is a string using mysql language
    connection.query(
      "SELECT artist, song, raw_total FROM top5000 WHERE raw_total BETWEEN 20 AND 23",
      (err, data) => {
        if (err) {
          console.log(err);
        }
        //now, instead of res.send("a thing") you can res.json the data
        res.json(data);
      }
    );
    // res.send("a thing");
  });

  app.listen(PORT, () => {
    console.log(`Listening at: http://localhost:${PORT}`);
  });
  //connection.end();
});
