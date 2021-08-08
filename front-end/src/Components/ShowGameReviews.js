import React from "react";
import "../Styles/GameDetails.css";

const ShowGameReviews = ({ review }) => {
  return (
    <li>
      <div>
        <p className="review-title">{review.title}</p>
        <p>{review.content}</p>
        <p>Reviewer: {review.reviewer}</p>
        <p>Rating: {review.rating}</p>
        <button>Edit Review</button>
        <button>Delete Review</button>
      </div>
    </li>
  );
};

export default ShowGameReviews;
