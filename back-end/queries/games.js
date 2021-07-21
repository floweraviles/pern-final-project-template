const db = require("../db/dbConfig");

const getAllGames = async () => {
  try {
    const allGames = await db.any("SELECT * FROM games");
    return allGames;
  } catch (err) {
    res.json(err);
  }
};









const createGame = async (newGame) => {
  const { name, console, price, release_date, favorites, box_image } = newGame
  try { const createdGame = await db.one(
      "INSERT INTO games(name, console, price, release_date, favorites, box_image) VALUES $1, $2, $3, $4, $5, $6) RETURNING *",
      [name, console, price, release_date, favorites, box_image]
    );
    return createdGame
  } catch (error) {console.log(error)
  }
};


















































module.exports = { 
  getAllGames, 
  getGame, 
  createGame, 
  updateGame, 
  deleteGame  };
