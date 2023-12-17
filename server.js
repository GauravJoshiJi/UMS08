const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyPareser = require("body-parser");
const path = require("path");
const route = require("./server/routes/router");
const Mongodb = require("./server/database/connection");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//log requests
app.use(morgan("tiny"));

//connecting mongodb database
Mongodb();

//body-parser
app.use(bodyPareser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//loading assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));

//loading router
app.use("/", route);

app.listen(PORT, () => {
  console.log(`Server is running on Port: https://localhost:${PORT}`);
});
