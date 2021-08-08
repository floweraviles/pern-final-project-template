import React from "react";
import "../Styles/GameDetails.css";

const ShowGameReviews = ({ review }) => {
  return (
    <li>
      <div>
        <h3>{review.title}</h3>
        <h4>by {review.reviewer}</h4>
        <p>{review.content}</p>
        <p>Rating: {review.rating}</p>
        <button>Edit Review</button>
        <button>Delete Review</button>
      </div>
      <hr />
    </li>
  );
};

export default ShowGameReviews;
