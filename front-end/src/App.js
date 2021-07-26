import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Cart from "./Components/Cart";

import NavBar from "./Components/NavBar";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addGameToShoppingCart = (newShoppingCartItem) => {
    setShoppingCart((prevShoppingCart) => [
      ...prevShoppingCart,
      newShoppingCartItem,
    ]);
  };

  const deleteShoppingCartItem = (id) => {
    const filteredArray = shoppingCart.filter((item) => item.id !== id);
    setShoppingCart(filteredArray);
  };

  console.log(shoppingCart);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/games">
              <Index addGameToShoppingCart={addGameToShoppingCart} />
            </Route>
            <Route path="/games/new">
              <New />
            </Route>
            <Route exact path="/games/:id">
              <Show addGameToShoppingCart={addGameToShoppingCart}/>
            </Route>
            <Route path="/games/:id/edit">
              <Edit />
            </Route>
            <Route exact path="/cart">
              <Cart shoppingCart={shoppingCart} deleteShoppingCartItem={deleteShoppingCartItem}/>
            </Route>
            <Route path="*">
              <FourOFour />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
