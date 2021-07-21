const db = require("../db/dbConfig");

const getAllGames = async () => {
  try {
    const allGames = await db.any("SELECT * FROM games");
    return allGames;
  } catch (err) {
    res.json(err);
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



























































module.exports = { 
  getAllGames, 
  getGame, 
  createGame, 
  updateGame, 
  deleteGame  };
