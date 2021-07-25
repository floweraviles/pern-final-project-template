const express = require("express");

const reviews = express.Router({
  mergeParams: true,
});

const { getAllReviewsForGame } = require("../queries/reviews");

reviews.get("/:id", async (req, res) => {
  const gameReviews = await getAllReviewsForGame(req.params.id);
  res.json(gameReviews);
});

module.exports = reviews

