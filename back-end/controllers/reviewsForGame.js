const express = require("express");

const reviewsForGame = express.Router({
  mergeParams: true,
});

const { getAllReviewsForGame } = require("../queries/reviews");
reviewsForGame.get("/", async (req, res) => {
  const { game_id } = req.params;
  const gameReviews = await getAllReviewsForGame(game_id);
  res.json(gameReviews);
});

module.exports = reviewsForGame;
