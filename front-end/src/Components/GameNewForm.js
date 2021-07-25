import axios from "axios";
import React, { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { apiURL } from "../util/apiURL.js";

const API = apiURL();

function GameNewForm() {
  let history = useHistory();

  const [game, setGame] = useState({
    name: "",
    console: "",
    price: "",
    release_date: "",
    favorites: false,
    box_image: "",
  });

  const addGame = async (newGame) => {
    try {
      await axios.post(`${API}/games`, newGame);
      history.push(`/games`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTextInput = (event) => {
    setGame({ ...game, [event.target.id]: event.target.value });
  };

  const handleCheckBox = (event) => {
    setGame({ ...game, [event.target.id]: !game.favorites });
  };

  const handleNumChange = (e) => {
    setGame({...game, [e.target.id]:Number(e.target.value) })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addGame(game);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Game Name:</label>
        <input
          id="name"
          value={game.name}
          type="text"
          onChange={handleTextInput}
          required
        />

        <label htmlFor="console">Console:</label>
        <input id="console" type="text" value={game.console}onChange={handleTextInput} required />

        <label htmlFor="price">Price:</label>
        <input id="price" type="number" value={game.price}onChange={handleNumChange} required />

        <label htmlFor="release_date">Release Year:</label>
        <input
          id="release_date"
          value={game.release_date}
          type="number"
          onChange={handleNumChange}
          required
        />

        <label htmlFor="favorites">Favorites:</label>
        <input id="favorites" type="checkbox" checked={game.favorites} onChange={handleCheckBox} />

        <label htmlFor="box_image">Box Image:</label>
        <input id="box_image" type="text" value={game.box_image} onChange={handleTextInput} />

        <input type="submit" />
      </form>
    </div>
  );
}
export default withRouter(GameNewForm);