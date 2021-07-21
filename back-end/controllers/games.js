const express = require("express");
const games = express.Router();
const { getAllGames,
  getGame,
  createGame,
  deleteGame,
  updateGame
} = require("../queries/games");

games.get("/", async (req, res) => {
  const allGames = await getAllGames();
  res.json(allGames);
});






games.post("/", async (req, res) => {
  const newGame = req.body;
  const result = await createGame(newGame)
  res.json(result);
});






















































module.exports = games;
