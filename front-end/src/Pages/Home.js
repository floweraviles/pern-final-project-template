import "../Styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="Home">
      <div className="call">
        <div>
          <h2>Welcome to</h2>
          <h1>Retro Games</h1>
          <Link to={"/games"}>
            <button>See our games</button>
          </Link>
        </div>
        
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg"
            alt="carousel-box-art"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
