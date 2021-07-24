import { Link } from "react-router-dom";
// import "./NavBar.css"

export default function NavBar() {
    return (
      <nav className = "NavBar">
        <h1 className = "home">
          <Link to="/games">Retro Gems Store</Link>
        </h1>
        <br></br>
        <button className = "button">
          <Link to="/games/new">New Game</Link>
        </button>
        <h1><Link to="/cart">Cart</Link></h1>
      </nav>
    );
  }