const express = require("express");
const { getAllReviewsForGame } = require("../queries/reviews");


const reviewsForGame = express.Router({
  mergeParams: true,
});

reviewsForGame.get("/", async (req, res) => {
  const { game_id } = req.params;
  const gameReviews = await getAllReviewsForGame(game_id);
  res.json(gameReviews);
});

module.exports = reviewsForGame;
