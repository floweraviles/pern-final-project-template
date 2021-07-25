import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../Styles/GameEditForm.css";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const GameEditForm = () => {
  let { id } = useParams();
  let history = useHistory();

  const [game, setGame] = useState({
    name: "",
    console: "",
    price: 0,
    release_date: 0,
    favorites: null,
    box_image: "",
  });

  const handleTextChange = (e) => {
    setGame({ ...game, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setGame({ ...game, favorites: !game.favorites });
  };

  const handleNumChange = (e) => {
    setGame({ ...game, [e.target.id]: Number(e.target.value) });
  };

  useEffect(() => {
    const fetchGameToEdit = async () => {
      try {
        let res;
        res = await axios.get(`${API}/games/${id}`);

        setGame(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchGameToEdit();
  }, [id]);

  const updateGame = async (gameToEdit, id) => {
    try {
      await axios.put(`${API}/games/${id}`, gameToEdit);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateGame(game, id);
    history.push(`/games/${id}`);
  };
  return(

  <form className="game-edit-form" onSubmit={handleSubmit}>
    <label htmlFor="name">Title of Game:</label>
    <input
      id="name"
      value={game.name}
      type="text"
      onChange={handleTextChange}
      placeholder="Title of Game"
      required
    />
    <label htmlFor="console">Console:</label>
    <input
      id="console"
      type="text"
      required
      value={game.console}
      placeholder="Console"
      onChange={handleTextChange}
    />
    <label htmlFor="price">Price:</label>
    <input
      id="price"
      type="number"
      name="price"
      value={game.price}
      placeholder="Price"
      onChange={handleNumChange}
    />
    <label htmlFor="release_date">Release Date:</label>
    <input
      id="release_date"
      type="number"
      name="release_date"
      value={game.release_date}
      onChange={handleNumChange}
    />
    <label htmlFor="favorites">Favorites:</label>
    <input
      id="favorites"
      type="checkbox"
      onChange={handleCheckboxChange}
      checked={game.favorites}
    />
    <label htmlFor="box_image">Box Art Link:</label>
    <input
      id="box_image"
      type="text"
      name="box_image"
      value={game.box_image}
      onChange={handleTextChange}
    />

    <br />

    <button>Submit</button>
  </form>
  )
};

export default GameEditForm;
