const express = require("express");

const reviews = express.Router({
  mergeParams: true,
});

const { getAllReviewsForGame } = require("../queries/reviews");

reviews.get("/", async (req, res) => {
  const { game_id } = req.params;
  const gameReview = await getAllReviewsForGame(game_id);
  res.json(gameReview);
});

module.exports = reviews;
