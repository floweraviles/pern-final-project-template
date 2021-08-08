import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, withRouter, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL.js";

const API = apiURL();

const ReviewNewForm = () => {
  const { id } = useParams();
  let history = useHistory();

  const [newReview, setNewReview] = useState({
    title: "",
    content: "",
    reviewer: "",
    rating: "",
  });

  const [game, setGame] = useState({
    name: "",
    console: "",
    price: 0,
    release_date: 0,
    favorites: null,
    box_image: "",
  });

  const addGameReview = async (newGameReview) => {
    try {
      await axios.post(`${API}/games/${id}/reviews`, newGameReview);
      
    } catch (error) {
      return error;
    }
  };

  const handleTextInput = (event) => {
    setNewReview({ ...newReview, [event.target.id]: event.target.value });
  };

  const handleNumChange = (e) => {
    setNewReview({ ...newReview, [e.target.id]: Number(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addGameReview(newReview);
    history.push(`/games/${id}`);
  };

  useEffect(() => {
    const fetchGameToReview = async () => {
      try {
        let res;
        res = await axios.get(`${API}/games/${id}`);

        setGame(res.data.payload);
      } catch (error) {
        return error;
      }
    };
    fetchGameToReview();
  }, [id]);

  return (
    <div>
      <div>
        <img src={game.box_image} alt="game-boxart" />
      </div>
      <div>
        <p>{game.name}</p>
        <p>{game.console}</p>
        <p>{game.release_date}</p>
      </div>
      <form className="game-edit-form" onSubmit={handleSubmit}>
        <label htmlFor="game-rating">Game Rating (out of 5):</label>
        <input
          id="rating"
          type="number"
          value={newReview.rating}
          onChange={handleNumChange}
          placeholder="Rating"
          min="1"
          max="5"
          required
        />

        <label htmlFor="review-title">Review Title:</label>
        <input
          id="title"
          value={newReview.title.toUpperCase()}
          type="text"
          onChange={handleTextInput}
          placeholder="Title of Review"
          required
        />

        <label htmlFor="review-content">Review:</label>
        <textarea
          name="w3review"
          rows="4"
          cols="50"
          id="content"
          type="text"
          value={newReview.content}
          onChange={handleTextInput}
          placeholder="Review"
        />

        <label htmlFor="reviewer">Your Name:</label>
        <input
          id="reviewer"
          type="text"
          value={newReview.reviewer.toUpperCase()}
          onChange={handleTextInput}
          placeholder="Your name"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default withRouter(ReviewNewForm);
