const db = require("../db/dbConfig");

const getAllGames = async () => {
  try {
    const allGames = await db.any("SELECT * FROM games");
    return allGames;
  } catch (err) {
    res.json(err);
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
