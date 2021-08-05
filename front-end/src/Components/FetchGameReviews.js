import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import ShowGameReviews from "./ShowGameReviews";
import '../Styles/GameDetails.css'

const API = apiURL();
const FetchGameReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchAllReviewsForGame = async () => {
      try {
        const reviewsForGame = await axios.get(`${API}/games/${id}/reviews`);
        setReviews(reviewsForGame.data.payload);
      } catch (error) {
        return error
      }
    };
    fetchAllReviewsForGame();
    
  }, [id]);
  return (
    <article className="review-section">
      <ul>
        {reviews.map((review) => { 
       return <ShowGameReviews review={review} key={review.id} />;
        })}
      </ul>
    </article>
  );
};

export default FetchGameReviews;
