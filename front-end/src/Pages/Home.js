import "../Styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="Home">
      <div>
        <h2>Welcome to</h2>
        <h1>Retro Games</h1>
        <Link to={"/games"}>
          <button>See our games</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
