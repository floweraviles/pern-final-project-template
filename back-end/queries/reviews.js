const db = require("../db/dbConfig");

const getAllReviewsForGame = async (gameId) => {
  console.log("getAllReviewsForGame")
  try {
    const allReviewsForGame = await db.any(
<<<<<<< HEAD
      `SELECT * FROM reviews WHERE id = $1`,
      gameId
=======
      `SELECT * FROM reviews WHERE game_id = $1`
      ,gameId
>>>>>>> 6eb793ef1b9aea2c8f9c44311c5e7f9845e5a6df
    );
    return { success: true, payload: allReviewsForGame };
  } catch (err) {
    console.log(err);
    return { success: false, payload: err };
  }
};

const getReview = async () => {
  console.log("getReview")
  try {
<<<<<<< HEAD
    const review = await db.one("SELECT * FROM reviews WHERE id = $1", id);
    return { success: true, payload: review };
=======
      const review = await db.any(`SELECT * FROM reviews`);
      return { success: true, payload: review };
>>>>>>> 6eb793ef1b9aea2c8f9c44311c5e7f9845e5a6df
  } catch (e) {
    console.log(e);
    return { success: false, payload: e };
  }
};

const newReviewForGame = async (review, gameId) => {
  console.log("newReviewForGame")
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
<<<<<<< HEAD
  getAllReviewsForGame,
  getReview,
  newReviewForGame,
  updateReview,
  deleteReview,
};
=======
    getAllReviewsForGame,
    getReview,
    newReviewForGame,
    updateReview,
    deleteReview,
}
>>>>>>> 6eb793ef1b9aea2c8f9c44311c5e7f9845e5a6df
