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



















// UPDATE GAME
const updateGame = async (id, game) => {
try {
const query = "UPDATE games SET name=$1, console=$2, price=$3, release_date=$4, favorites=$5, box_image=$6 RETURNING *";
const { name, console, price, release_date, favorites, box_image} = game;
const updatedGame = await db.one(query, [
  name,
  console,
  price,
  release_date,
  favorites,
  box_image,
  id,
]);
return updatedGame;
} catch (err){
console.log(err)
}
}
















































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
