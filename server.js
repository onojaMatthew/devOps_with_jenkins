// import dependencies

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3500;

require("dotenv").config();

require("./config/db")();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 50000 }));
app.use(cookieParser());
app.use(cors());

// custom routes
require("./middlewares/router")(app);

app.get("/", (req, res) => {
  res.send({ message: "Hello from Express API" });
});

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(express.static(__dirname + "/client/build/index.html"));
  });
}



let app_url;
app_url = process.env.NODE_ENV === "development" ? process.env.API_URL + port : process.env.API_URL

app.listen(port, () => {
  console.log(`Server is up and running at ${app_url}`);
});

exports.app = app;