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














































games.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deletedGame = await deleteGame(id)
    res.json({success: true, payload: deletedGame})
})














module.exports = games;
