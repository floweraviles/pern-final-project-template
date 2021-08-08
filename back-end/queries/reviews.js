const db = require("../db/dbConfig");

const getAllReviews = async () => {
    console.log("getAllReviews");
  try {
    const allReviews = await db.any("SELECT * FROM reviews");
    return { success: true, payload: allReviews };
  } catch (error) {
    return { success: false, payload: error };
  }
};
const getAllReviewsForGame = async (gameId) => {
  console.log("getAllReviewsForGame");
  try {
    const allReviewsForGame = await db.any(
      `SELECT * FROM reviews WHERE game_id = $1`,
      gameId
    );
    return { success: true, payload: allReviewsForGame };
  } catch (err) {
    return { success: false, payload: err };
  }
};

const getReviewForGame = async (id) => {
  console.log("getSingleReviewForGame")
  try {
const singleReviewForGame = await db.one(`SELECT * FROM reviews WHERE id = $1`, id)
return { success: true, payload: singleReviewForGame}
  } catch (error) {
    return { success: false, payload: error }
  }
}

const newReviewForGame = async (review, gameId) => {
  console.log("newReviewForGame");
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

    return { success: true, payload: newReview };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const updateReview = async (id, review) => {
  console.log("updateReview");
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
    return { success: true, payload: updatedReview };
  } catch (error) {
    return { success: false, payload: error };
  }
};

const deleteReview = async (id) => {
  console.log("deleteReview");
  try {
    const deletedReview = await db.one(
      `
          DELETE FROM reviews
          WHERE id = $1
          RETURNING * 
      `,
      id
    );
    return { success: true, payload: deletedReview };
  } catch (e) {
    console.log(e);
    return { success: false, payload: e };
  }
};

module.exports = {
  getAllReviewsForGame,
  getAllReviews,
  newReviewForGame,
  updateReview,
  deleteReview,
  getReviewForGame,
};
