import GameEditForm from "../Components/GameEditForm";
import "../Styles/GameEditForm.css";

import React from "react";

const Edit = () => {
  return (
    <section className="game-edit-section">
      <h2>Edit Game</h2>
      <GameEditForm />
    </section>
  );
};

export default Edit;
