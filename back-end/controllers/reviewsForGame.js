const express = require("express");
const reviewsForGame = express.Router({
  mergeParams: true,
});

const { getAllReviewsForGame, newReviewForGame } = require("../queries/reviews");
reviewsForGame.get("/", async (req, res) => {
  const { game_id } = req.params;
  const gameReviews = await getAllReviewsForGame(game_id);
  res.json(gameReviews);
});

reviewsForGame.post("/", async (req, res) => {
  const {game_id} = req.params
  const created = await newReviewForGame(req.body, game_id)
  res.json(created)
  });
module.exports = reviewsForGame;
