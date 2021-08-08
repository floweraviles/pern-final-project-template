// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const gamesController = require("./controllers/games")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

//GAMES ROUTE
app.use("/games", gamesController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//404
app.get("*", (req, res) => {
  res.status(404).send("Page Not Found")
})



// EXPORT
module.exports = app;
