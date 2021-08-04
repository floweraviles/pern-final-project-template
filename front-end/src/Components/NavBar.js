import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/NavBar.css";

export default function NavBar() {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };
  console.log(menu);
  return (
    <header>
      <nav className="NavBar">
        <h1 className="home">
          <NavLink exact to="/">
            RG_
          </NavLink>
        </h1>
        <div>
          <h1>
            <NavLink exact to={"/"}>
              Home
            </NavLink>
          </h1>
          <h1>
            <NavLink to={"/games"}>Games</NavLink>
          </h1>
          <h1>
            <NavLink to={"/about"}>About</NavLink>
          </h1>
          <i
            className={menu ? "fas fa-times" : "fas fa-bars"}
            onClick={showMenu}
          ></i>
        </div>
        <NavLink to="/cart" className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
        </NavLink>
      </nav>
      <ul className={menu ? "menu show" : "menu"} onClick={showMenu}>
        <li>
          <h1>
            <NavLink exact to={"/"}>
              Home
            </NavLink>
          </h1>
        </li>
        <li>
          <h1>
            <NavLink to={"/games"}>Games</NavLink>
          </h1>
        </li>
        <li>
          <h1>
            <NavLink to={"/about"}>About</NavLink>
          </h1>
        </li>
      </ul>
    </header>
  );
}
