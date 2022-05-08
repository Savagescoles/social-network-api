//All the things required listed here 
const express = require("express");
const routes = require("./routes");
const db = require("./config/connection");
require("dotenv").config();

const cwd = process.cwd();

const app = express();
const PORT = process.env.PORT || 3001;
app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Open and connect display what port were up on and message
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Welcome to the thunderdome ${PORT}!`);
  });
});