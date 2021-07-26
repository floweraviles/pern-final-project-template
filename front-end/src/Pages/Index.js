import GamesList from "../Components/GamesList";
import "../Styles/Index.css";
import { Link } from "react-router-dom";

const Index = ({ addGameToShoppingCart }) => {
  return (
    <section className="Index">
      <div className="title">
        <h1>All Our Games</h1>
        <Link to={"/games/new"}>
          <button>New Game</button>
        </Link>
      </div>
      <GamesList addGameToShoppingCart={addGameToShoppingCart} />
    </section>
  );
};

export default Index;
