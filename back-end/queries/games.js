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
















































const deleteGame = async (id) => {
    try {
        const query = "DELETE FROM games WHERE id = $1 RETURNING *"
        const deletedGame = await db.one(query, id)
        return deletedGame
    } catch (error) {
        console.log(error);
    }
}









module.exports = { 
  getAllGames, 
//   getGame, 
//   createGame, 
//   updateGame, 
  deleteGame  };
