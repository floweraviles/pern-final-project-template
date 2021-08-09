const express = require("express");
const { checkReviewTypes } = require("../helpers/checkTypes");
const reviewsForGame = express.Router({
  mergeParams: true,
});
const {
  getAllReviewsForGame,
  newReviewForGame,
  deleteReview,
  updateReview,
  getReviewForGame,
} = require("../queries/reviews");

reviewsForGame.get("/", async (req, res) => {
  const { game_id } = req.params;
  const gameReviews = await getAllReviewsForGame(game_id);
  res.json({success: true,  payload: gameReviews});
});

reviewsForGame.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleGameReview = await getReviewForGame(id);
    if (singleGameReview["id"]) {
      res.json({success: true, payload: singleGameReview});
    } else {
      throw singleGameReview
    }
  } catch (error) {
    res.status(404).json({success: false, payload: "Review not found", error: error})
  }
});

reviewsForGame.post("/", async (req, res) => {
  try {
    const { game_id } = req.params;
    const created = await newReviewForGame(req.body, game_id);
    if (checkReviewTypes(req.body)) {
      res.json({success: true, payload: created});
    } else {
      throw created
    }
  } catch (error) {
    res.status(422).json({success: false, payload: "Must enter required field", error: error})
  }
});

reviewsForGame.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteReview(id);
    if (deleted["id"]) {
      res.json({success: true, payload: deleted});
    } else {
      throw deleted
    }
  } catch (error) {
    res.status(404).json({success: false, payload: "Review not found", error: error})
  }
});

reviewsForGame.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await updateReview(id, req.body);
    if (checkReviewTypes(req.body)) {
      res.json({success: true, payload: updated});
    } else {
      throw updated
    }
  } catch (error) {
    res.status(422).json({success: false, payload: "Must enter valid data", error: error})
  }
});

module.exports = reviewsForGame;
