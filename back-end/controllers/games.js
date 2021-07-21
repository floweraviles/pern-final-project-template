const express = require("express");
const { getAllGames } = require("../queries/games");
const games = express.Router();

games.get("/", async (req, res) => {
  const allGames = await getAllGames();
  res.json(allGames);
});

module.exports = games;
