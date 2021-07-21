const db = require("../db/dbConfig");

const getAllGames = async () => {
  try {
    const allGames = await db.any("SELECT * FROM games");
    return allGames;
  } catch (err) {
    res.json(err);
  }
};
const getGame = async (id) => {
  try {
      const game = await db.one(`SELECT * FROM games WHERE id = $1`, id)
      return game
  } catch (error) {
      console.log(error)
  }
};


























































module.exports = { 
  getAllGames, 
  getGame, 
  createGame, 
  updateGame, 
  deleteGame  };
