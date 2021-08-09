const express = require("express");
const reviewsForGameController = require("./reviewsForGame");
const games = express.Router();
const {
  getAllGames,
  getGame,
  createGame,
  deleteGame,
  updateGame,
} = require("../queries/games");
const {checkGamesTypes} = require("../helpers/checkTypes");

games.use("/:game_id/reviews", reviewsForGameController);

games.get("/", async (req, res) => {
 
  const allGames = await getAllGames();
  res.json(allGames);
});

games.post("/", async (req, res) => {
  try {
    req.body.box_image ||= "https://dummyimage.com/300x400/000/fff.png&text=No+Image"
    const result = await createGame(req.body);
    if (checkGamesTypes(req.body)) {
      res.json({success: true, payload: result});
    } else {
      throw newGame
    }
  } catch (error) {
    res.status(422).json({success: false, payload: "Must input required field", error: error})
  }
});

games.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const game = await getGame(id);
    if (game["id"]) {
      res.json({success: true, payload: game});
    } else {
      throw game
    }
  } catch (error) {
    res.status(404).json({success: false, payload: "Game not found", error: error})
  }
});

games.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedGame = await updateGame(id, req.body);
    if (checkGamesTypes(req.body)) {
      res.json({ success: true, payload: updatedGame });
    } else {
      throw updateGame
    }
  } catch (error){
   res.status(422).json({success: false, payload: "Must include a valid input", error: error})
  }
});

games.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGame = await deleteGame(id);
    if (deletedGame["id"]) {
      res.json({ success: true, payload: deletedGame });
    } else {
      throw deletedGame
    }
  } catch (error) {
    res.status(404).json({success: false, payload: "Game not found", error: error})
  }
});

module.exports = games;
