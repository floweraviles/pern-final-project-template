import React from "react";
import '../Styles/GameDetails.css'

const ShowGameReviews = (props) => {
  const { review } = props;

 
  return (
    <li className="review-table-body">
      <p className="review-title">{review.title}</p>
      <p>{review.content}</p>
      <p>Reviewer: {review.reviewer}</p>
      <p>Rating: {review.rating}</p>
      <button>Edit Review</button>
      <button>Delete Review</button>
    </li>
  );
};

export default ShowGameReviews;
