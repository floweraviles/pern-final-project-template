const express = require("express");
const reviewsForGame = express.Router({
  mergeParams: true,
});

const { getAllReviewsForGame, newReviewForGame, deleteReview, updateReview, getReviewForGame } = require("../queries/reviews");
reviewsForGame.get("/", async (req, res) => {
  const { game_id } = req.params;
  const gameReviews = await getAllReviewsForGame(game_id);
  res.json(gameReviews);
});

reviewsForGame.get("/:id", async (req, res) => {
  const {id } = req.params;
  const singleGameReview = await getReviewForGame(id)
  res.json(singleGameReview)
})
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

  reviewsForGame.put("/:id", async (req, res) => {
    console.log("updateOnReviewsController")
    const { id } = req.params;
    const updated = await updateReview(id, req.body)
    res.json(updated)
    });
  
module.exports = reviewsForGame;
