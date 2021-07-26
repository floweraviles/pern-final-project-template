import { useState, useEffect } from "react";

const Cart = ({ shoppingCart, deleteShoppingCartItem }) => {
  const [total, setTotal] = useState(0)

 

  useEffect(() => {
    const calculateTotal = () => {
      let subtotal = 0
      let tax = 0
      let totalAfterTax = 0
      shoppingCart.forEach((game) => (subtotal += game.price))
      tax = subtotal * 0.088
      totalAfterTax = subtotal + tax
      setTotal(totalAfterTax)
   
    }
    calculateTotal()
  }, [total, shoppingCart])
  return (
    <section>
      <ul>
        {shoppingCart.map((item) => {
          return (<li key={item.id}>
              <img src={item.box_image} alt="video_game_img"/>
              <h1>Name:{item.name}</h1>
              <h2>Price: ${item.price}(USD)</h2>
              <button onClick={() => deleteShoppingCartItem(item.id)}>Delete</button>
          </li>);
        })}
      </ul>

      <h1>Items in cart: {shoppingCart.length}</h1>
      <h1>Total: {total}</h1>

    </section>
  );
};

export default Cart;
