import axios from "axios";
import { useEffect, useState } from "react";
import { Link, withRouter, useHistory, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import GameReviews from "./GameReviews";

import "../Styles/GameDetails.css";

const API = apiURL();
function GameDetails({ addGameToShoppingCart }) {
  const [game, setGame] = useState({});
  const [reviews, setReviews] = useState([]);
  let history = useHistory();
  const { id } = useParams();

  const deleteGame = async () => {
    try {
      await axios.delete(`${API}/games/${id}`);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    const display = async () => {
      try {
        const res = await axios.get(`${API}/games/${id}`);

        setGame(res.data.payload);
      } catch (error) {
        return error;
      }
    };
    const fetchAllReviewsForGame = async () => {
      try {
        const reviewsForGame = await axios.get(`${API}/games/${id}/reviews`);

        setReviews(reviewsForGame.data.payload);
      } catch (error) {
        return error;
      }
    };
    display();
    fetchAllReviewsForGame();
  }, [id]);

  const handleDelete = async () => {
    await deleteGame();
    history.push("/games");
  };

  return (
    <article>
      <div className="container">
        <img src={game.box_image} alt="game img" />
        <div className="info">
          <h1>{game.name}</h1>
          <h3>Console: {game.console}</h3>
          <h4>{game.release_date}</h4>
          <h3>Price: USD ${game.price?.toFixed(2)}</h3>
          <h4>
            {!game.favorite ? (
              <span>❤️</span>
            ) : (
              <span className="notfav">💔</span>
            )}
          </h4>
          <button onClick={() => addGameToShoppingCart(game)}>
            Add to Cart
          </button>
          <div>
            <Link to={`/games/${game.id}/edit`}>
              <button className="edit" type="button">
                Edit
              </button>
            </Link>
            <button className="delete" onClick={handleDelete}>
              Delete
            </button>
            <Link to={`/games`}>
              <button className="back" type="button">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
      <GameReviews reviews={reviews} />
    </article>
  );
}

export default withRouter(GameDetails);
