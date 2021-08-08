const db = require("../db/dbConfig");

const getAllReviewsForGame = async (gameId) => {
  try {
    const allReviewsForGame = await db.any(
      `SELECT * FROM reviews WHERE game_id = $1`
      ,gameId
    );
    return { success: true, payload: allReviewsForGame };
  } catch (err) {
    return { success: false, payload: err };
  }
};

const newReviewForGame = async (review, gameId) => {
  const { reviewer, title, content, rating } = review;
  try {
    const created = await db.one(
      `
          INSERT INTO reviews (reviewer, title, content, rating, game_id) 
          VALUES ($1, $2, $3, $4, $5)
          RETURNING *
      `,
      [reviewer, title, content, rating, gameId]
    );
    return { success: true, payload: created };
  } catch (e) {
    console.log(e);
    return { success: false, payload: e };
  }
};

const updateReview = async (id, review) => {
  console.log("updateReview")
  const { reviewer, title, content, rating, game_id } = review;
  try {
    const res = await db.one(
      `
          UPDATE reviews 
          SET reviewer = $1, title = $2, content = $3, rating = $4, game_id = $5
          WHERE id = $6
          RETURNING * 
      `,
      [reviewer, title, content, rating, game_id, id]
    );
    return { success: true, payload: res };
  } catch (e) {
    return { success: false, payload: e };
  }
};

const deleteReview = async (id) => {
  console.log("deleteReview")
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
    newReviewForGame,
    updateReview,
    deleteReview,
}

