import { Link } from "react-router-dom";

const GameListItem = ({ game, addGameToShoppingCart }) => {
  return (
    <li>
      <Link to={`/games/${game.id}`}>
        <img src={game.box_image} alt="game img" />
      </Link>
      <Link to={`/games/${game.id}`}>
        <h2>{game.name}</h2>
      </Link>
      <h3>{game.release_date}</h3>
      <h1>USD ${game.price.toFixed(2)}</h1>
      <div>
        {game.favorites ? <p>❤️</p> : <p>💔</p>}
        <button onClick={() => addGameToShoppingCart(game)}>Add to Cart</button>
      </div>
    </li>
  );
};

export default GameListItem;
