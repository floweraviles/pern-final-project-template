import axios from "axios";
import { useEffect, useState } from "react";
import { Link, withRouter, useHistory, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import ShowGameReviews from "./ShowGameReviews";

const API = apiURL();
const FetchGameReviews = () => {
  //   let history = useHistory();
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchAllReviewsForGame = async () => {
      try {
        const reviewsForGame = await axios.get(`${API}/games/${id}/reviews`);
        debugger
        setReviews(reviewsForGame.data.payload);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllReviewsForGame();
    console.log(reviews)
  }, []);
  return (
    <section>
      <table>
        {reviews.map((review) => {
          <ShowGameReviews review={review} />;
        })}
      </table>
    </section>
  );
};

export default FetchGameReviews;
