import axios from "axios";
import { useEffect, useState } from "react";
import { Link, withRouter, useHistory, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import GameReviews from "./GameReviews";

import "../Styles/GameDetails.css";

const API = apiURL();
function GameDetails({
  addGameToShoppingCart
 
}) {
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

        setGame(res.data);
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
    <div className="container">
      <img src={game.box_image} alt="game img" />
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
          Go Back
        </button>
      </Link>
      <h2>Game Reviews</h2>
      <Link to={`/games/${id}/newreview`}>
        <div>
          <button>Add Your Review</button>
        </div>
      </Link>
      <GameReviews reviews={reviews} />
    </div>
  );
}

export default withRouter(GameDetails);
