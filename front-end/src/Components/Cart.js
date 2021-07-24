const Cart = ({ shoppingCart, deleteShoppingCartItem }) => {
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
    </section>
  );
};

export default Cart;
