const db = require("../db/dbConfig");

const getAllReviewsForGame = async (gameId) => {
  try {
    const allReviewsForGame = await db.any(
      `
SELECT * FROM reviews WHERE game_id = $1`,
      gameId
    );
    return { success: true, payload: allReviewsForGame };
  } catch (err) {
    console.log(err);
    return { success: false, payload: err };
  }
};

module.exports = {
    getAllReviewsForGame
}