import axios from "axios";
import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";

import { apiURL } from "../util/apiURL.js";
const API = apiURL();


function GameNewForm() {
    let history = useHistory()

const addGame = async (newGame) => {
    try {
        await axios.post(`${API}/songs`, newGame);
        history.push(`/songs`);
    } catch (error) {
        console.log(error)
    }
};

const [song, setSong] = useState({
    name: "",
    console: "",
    price: "",
    release_date: "",
    favorites: false,
    box_image:""
})

 return (
    <div>
      <form>
      <label htmlFor="name">Game Name:</label>
        <input id="name" value={game.name} type="text" onChange={handleTextInput} required />

        <label htmlFor="console">Console:</label>
        <input id="console" type="text" onChange={handleTextInput} required />

        <label htmlFor="price">Price:</label>
        <input id="price" type="text" onChange={handleTextInput} required />

        <label htmlFor="release_date">Release Date:</label>
        <input id="release_date" type="text" onChange={handleTextInput} required />

        <label htmlFor="favorites">Favorites:</label>
        <input id="favorites" type="checkbox" onChange={handleCheckBox} />

        <input type="submit" />
      </form>
    </div>
  );
};
export default withRouter(GameNewForm)
 

