import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Cart.css";

const Cart = ({ shoppingCart, deleteShoppingCartItem }) => {
  const [subtotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [buy, setBuy] = useState(false);

  const purchase = () => {
    setBuy((prevBuy) => !prevBuy);
  };
  useEffect(() => {
    let subtotal = 0;
    let tax = 0;
    let totalAfterTax = 0;
    const calculateTotal = () => {
      shoppingCart.forEach((game) => (subtotal += game.price));
      tax = subtotal * 0.088;
      totalAfterTax = subtotal + tax;
      setSubTotal(subtotal);
      setTax(tax);
      setTotal(totalAfterTax);
    };
    calculateTotal();
  }, [total, shoppingCart]);

  return (
    <section className="Cart">
      <h1>Cart</h1>
      <div className="box">
        {shoppingCart.length ? (
          <ul>
            {shoppingCart.map((item) => {
              return (
                <li key={item.id}>
                  <img src={item.box_image} alt="video_game_img" />
                  <div>
                    <h2>{item.name}</h2>
                    <h2>Price: USD ${item.price}</h2>
                    <button onClick={() => deleteShoppingCartItem(item.id)}>
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <ul>
            <h2>The cart is empty.</h2>
            <Link to={"/games"}>
              <button className="btn">Go back</button>
            </Link>
          </ul>
        )}
        <div className="checkout">
          <h3>Items in cart: {shoppingCart.length}</h3>
          <div>
            <p>Subtotal: USD ${subtotal.toFixed(2)}</p>
            <p>Tax Applied: USD ${tax.toFixed(2)}</p>
          </div>
          <h2>Total: USD ${total.toFixed(2)}</h2>
          <button onClick={purchase}>Purchase</button>
          {buy ? <h2>Thanks for buying at Retro Games</h2> : null}
        </div>
      </div>
    </section>
  );
};

export default Cart;
