const db = require("../db/dbConfig");

const getAllReviewsForGame = async (id) => {
  try {
    const allReviewsForGame = await db.any(
      `
SELECT * FROM reviews WHERE id = $1`,
      id
    );
    return { success: true, payload: allReviewsForGame };
  } catch (err) {
    console.log(err);
    return { success: false, payload: err };
  }
};

module.export = {
    getAllReviewsForGame
}