import React from "react";
import '../Styles/GameDetails.css'

const ShowGameReviews = (props) => {
  const { review } = props;

 
  return (
    <tbody className="review-table-body">
      <tr className="review-title">{review.title}</tr>
      <tr>{review.content}</tr>
      <tr>Reviewer: {review.reviewer}</tr>
      <tr>Rating: {review.rating}</tr>
      <button>Edit Review</button>
      <button>Delete Review</button>
    </tbody>
  );
};

export default ShowGameReviews;
