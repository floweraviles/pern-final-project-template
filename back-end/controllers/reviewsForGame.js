const express = require("express");
const reviewsForGame = express.Router({
  mergeParams: true,
});

const { getAllReviewsForGame, newReviewForGame, deleteReview } = require("../queries/reviews");
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

  reviewsForGame.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deleted = await deleteReview(id);
    res.json(deleted)
  });
  
module.exports = reviewsForGame;
