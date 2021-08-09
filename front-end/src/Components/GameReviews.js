import ShowGameReviews from "./ShowGameReviews";
import "../Styles/GameDetails.css";
import { Link, useParams } from "react-router-dom";

const GameReviews = ({ reviews, handleDeleteReview }) => {
  const { id } = useParams();

  return (
    <div className="review-div">
      <div className="review-title">
        <h2>Reviews</h2>
        <Link to={`/games/${id}/new_review`}>
          <button>New Review</button>
        </Link>
      </div>
      <hr />
      {reviews.length ? (
        <ul>
          {reviews.map((review) => {
            return (
              <ShowGameReviews
                review={review}
                key={review.id}
                handleDeleteReview={handleDeleteReview}
              />
            );
          })}
        </ul>
      ) : (
        <ul>
          <li>
            <div>
              <h5>No reviews yet. Please add a review for this amazing game.</h5>
            </div>
            <hr />
          </li>
        </ul>
      )}
    </div>
  );
};

export default GameReviews;
