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
          <h1><NavLink to={"/about"}>About</NavLink></h1>
          <i class="fas fa-bars"></i>
        </div>
        <NavLink to="/cart" className="cart-icon"><i className="fas fa-shopping-cart"></i></NavLink>
      </nav>
    );
  }