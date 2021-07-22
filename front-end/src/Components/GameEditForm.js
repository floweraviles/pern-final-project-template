import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

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

  useEffect(() => {
    const fetchGameToEdit = async () => {
      try {
        let res;
        res = await axios.get(`${API}/games/${id}`);
        setGame(res.data.payload);
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
  return <div>

<form onSubmit={handleSubmit}>
        <label htmlFor="name">Title of Game:</label>
        <input
          id="name"
          value={game.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Title of Game "
          required
        />
        <label htmlFor="console">Console:</label>
        <input
          id="console"
          type="text"
          required
          value={song.artist}
          placeholder="Artist"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="Album"
          onChange={handleTextChange}
        />
        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
    //   {song.isFavorite ? 'checked' : ""}
        checked={song.is_favorite}
        
        />

        <br />

        <button>Submit</button>
      </form>

  </div>;
};

const handleTextChange = (e) => {
  setGame({ ...song, [e.target.id]: e.target.value });
};

export default GameEditForm;
