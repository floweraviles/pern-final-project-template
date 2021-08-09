const db = require("../db/dbConfig");

const getAllReviewsForGame = async (gameId) => {
  try {
    const allReviewsForGame = await db.any(
      `SELECT * FROM reviews WHERE game_id = $1`,
      gameId
    );
    return allReviewsForGame;
  } catch (error) {
    return error;
  }
};

const getReviewForGame = async (id) => {
  try {
    const singleReviewForGame = await db.one(
      `SELECT * FROM reviews WHERE id = $1`,
      id
    );
    return singleReviewForGame ;
  } catch (error) {
    return error;
  }
};

const newReviewForGame = async (review, gameId) => {
  const { reviewer, title, content, rating } = review;
  try {
    const newReview = await db.one(
      `
          INSERT INTO reviews (reviewer, title, content, rating, game_id) 
          VALUES ($1, $2, $3, $4, $5)
          RETURNING *
      `,
      [reviewer, title, content, rating, gameId]
    );

    return newReview;
  } catch (error) {
    return error;
  }
};

const updateReview = async (id, review) => {
  const { reviewer, title, content, rating, game_id } = review;
  try {
    const updatedReview = await db.one(
      `
          UPDATE reviews 
          SET reviewer = $1, title = $2, content = $3, rating = $4, game_id = $5
          WHERE id = $6
          RETURNING * 
      `,
      [reviewer, title, content, rating, game_id, id]
    );
    return updatedReview ;
  } catch (error) {
    return error;
  }
};

const deleteReview = async (id) => {
  try {
    const deletedReview = await db.one(
      `
          DELETE FROM reviews
          WHERE id = $1
          RETURNING * 
      `,
      id
    );
    return deletedReview;
  } catch (error) {
    return error ;
  }
};

module.exports = {
  getAllReviewsForGame,
  newReviewForGame,
  updateReview,
  deleteReview,
  getReviewForGame,
};
