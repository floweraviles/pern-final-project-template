import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../Styles/GameEditForm.css";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const GameEditForm = () => {
  let { id, review_id } = useParams();
  let history = useHistory();

  const [review, setReview] = useState({
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

  const handleTextChange = (e) => {
    setReview({ ...review, [e.target.id]: e.target.value });
  };



  const handleNumChange = (e) => {
    setReview({ ...review, [e.target.id]: Number(e.target.value) });
  };

  useEffect(() => {
    const fetchGameReviewToEdit = async () => {
      try {
        let res;
        res = await axios.get(`${API}/games/${id}/reviews/${review_id}`);
        setReview(res.data.payload);
      } catch (error) {
        return error
      }
    };
    const fetchGameToReview = async () => {
        try {
          let res;
          res = await axios.get(`${API}/games/${id}`);
  
          setGame(res.data.payload);
        } catch (error) {
          return error;
        }
      };
      fetchGameToReview()
      fetchGameReviewToEdit();
      
  }, [id, review_id]);

  const updateReview = async (reviewToEdit, id) => {
    try {
      await axios.put(`${API}/games/${id}/reviews/${review_id}`, reviewToEdit);
    } catch (error) {
      return error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateReview(review, id);
    history.push(`/games/${id}`);
  };
  return (
    <div className="box">
      <form className="game-edit-form" onSubmit={handleSubmit}>
        <label htmlFor="game-rating">Game Rating (out of 5):</label>
        <input
          id="rating"
          type="number"
          value={review.rating}
          onChange={handleNumChange}
          placeholder="Rating"
          min="1"
          max="5"
          required
        />

        <label htmlFor="review-title">Review Title:</label>
        <input
          id="title"
          value={review.title.toUpperCase()}
          type="text"
          onChange={handleTextChange}
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
          value={review.content}
          onChange={handleTextChange}
          placeholder="Review"
        />

        <label htmlFor="reviewer">Your Name:</label>
        <input
          id="reviewer"
          type="text"
          value={review.reviewer.toUpperCase()}
          onChange={handleTextChange}
          placeholder="Your name"
        />
        <br />
        <button>Submit</button>
      </form>
      <div className="presentation">
        <img src={game.box_image} alt="game-boxart" />
      </div>
    </div>
  );
};

export default GameEditForm;