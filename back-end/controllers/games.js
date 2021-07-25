const express = require("express");
const reviewsController = require('./reviews')
const reviewsForGameController = require('./reviewsForGame')
const games = express.Router();
const {
  getAllGames,
  getGame,
  createGame,
  deleteGame,
  updateGame,
} = require("../queries/games");


games.use("/:game_id/reviews", reviewsForGameController);




games.get("/", async (req, res) => {
  const allGames = await getAllGames();
  res.json(allGames);
});

games.post("/", async (req, res) => {
  const newGame = req.body;
  const result = await createGame(newGame);
  console.log(result);
  res.json(result);
});

games.get("/:id", async (req, res) => {
  const { id } = req.params;
  const game = await getGame(id);
  res.json(game);
});

// UPDATE GAME
games.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedGame = await updateGame(id, req.body);
    res.status(200).json({ success: true, payload: updatedGame });
  } catch (err) {
    console.log(err);
  }
});

games.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedGame = await deleteGame(id);
  res.json({ success: true, payload: deletedGame });
});

module.exports = games;
