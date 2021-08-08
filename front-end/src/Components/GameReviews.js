import ShowGameReviews from "./ShowGameReviews";
import "../Styles/GameDetails.css";

const GameReviews = ({ reviews }) => {
 

  return (
    <div className="review-div">
      <ul>
        {reviews.map((review) => {
          return <ShowGameReviews review={review} key={review.id} />;
        })}
      </ul>
    </div>
  );
};

export default GameReviews;
