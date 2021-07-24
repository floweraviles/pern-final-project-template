import { Link } from "react-router-dom";


const GameListItem = ({ game, addGameToShoppingCart}) => {
  


  return (
    <li>
      <Link to={`/games/${game.id}`}>
        <h2>{game.name}</h2>
      </Link>
      <img src={game.box_image} alt="game img" />
      <h3>{game.console}</h3>
      <p>
        This game was release in {game.release_date} and it cost {game.price}
        USD$
      </p>
      {game.favorites ? (
        <p>It's people's favorite</p>
      ) : (
        <p>It's not people's favorite</p>
      )}
      <button onClick={() => addGameToShoppingCart(game)}>Add to Cart</button>
    </li>
  );
};

export default GameListItem;
