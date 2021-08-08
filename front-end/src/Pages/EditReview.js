import ReviewEditForm from "../Components/ReviewEditForm";
import "../Styles/GameEditForm.css";

import React from "react";

const ReviewEdit = () => {
  return (
    <section className="game-edit-section">
      <h2>Edit Review</h2>
      <ReviewEditForm />
    </section>
  );
};

export default ReviewEdit;