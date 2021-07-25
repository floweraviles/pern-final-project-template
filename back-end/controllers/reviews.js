const express = require("express");

const reviews = express.Router({
  mergeParams: true,
});

const { 
  // getAllReviews,
  getAllReviewsForGame,
  newReviewForGame,
  updateReview,
  deleteReview
 } = require("../queries/reviews");

//gets all reviews for all games:
reviews.get("/", async (req, res) => {
const allReviews = await getAllReviews(req.params.game_id)
res.json(allReviews)
});

//gets reviews for a specific game 
reviews.get("/", async (req, res) => {
  const { game_id } = req.params
  const gameReviews = await getAllReviewsForGame(game_id);
  res.json(gameReviews);
});

reviews.post("/", async (req, res) => {
const {game_id} = req.params
const created = await newReviewForGame(req.body, game_id)
res.json(created)
});

reviews.put("/:id", async (req, res) => {
const { id } = req.params;
const updated = await updateReview(id)
res.json(updated)
});

reviews.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await deleteReview(id);
  res.json(deleted)
})
module.exports = reviews

