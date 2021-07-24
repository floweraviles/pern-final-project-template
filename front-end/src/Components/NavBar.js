import { NavLink } from "react-router-dom";
import "../Styles/NavBar.css"

export default function NavBar() {
    return (
      <nav className = "NavBar">
        <h1 className = "home">
          <NavLink exact to="/">RG_</NavLink>
        </h1>
        <div>
          <h1><NavLink exact to={"/"}>Home</NavLink></h1>
          <h1><NavLink to={"/games"}>Games</NavLink></h1>
          <h1><NavLink to={"/reviews"}>Reviews</NavLink></h1>
          <h1><NavLink to={"/about"}>About</NavLink></h1>
        </div>
        <NavLink to="/cart"><i className="fas fa-shopping-cart"></i></NavLink>
      </nav>
    );
  }