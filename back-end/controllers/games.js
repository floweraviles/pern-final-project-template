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
















// UPDATE GAME
games.put("/:id", async (req, res) => {
  try {
const {id} = req.params;
const updatedGame = await updateGame(id, req.body)
res.status(200).json({success: true, payload: updatedGame})
  } catch (err){
    console.log(err)
  }
})












































module.exports = games;
