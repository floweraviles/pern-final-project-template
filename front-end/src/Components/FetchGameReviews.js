import axios from "axios";
import { useEffect, useState } from "react";
import { Link, withRouter, useHistory, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import ShowGameReviews from "./ShowGameReviews";
import '../Styles/GameDetails.css'

const API = apiURL();
const FetchGameReviews = () => {
  //   let history = useHistory();
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
    
  }, []);
  return (
    <section className="review-section">
      <table>
       
        {reviews.map((review) => { 
       return <ShowGameReviews review={review} />;
        })}
      </table>
    </section>
  );
};

export default FetchGameReviews;
