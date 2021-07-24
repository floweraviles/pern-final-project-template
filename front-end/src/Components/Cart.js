const Cart = ({ shoppingCart }) => {
  return (
    <section>
      <ul>
        {shoppingCart.map((item) => {
          return (<li key={item.id}>
              <img src={item.box_image} alt="video_game_img"/>
              <h1>Name:{item.name}</h1>
              <h2>Price: {item.price}</h2>
          </li>);
        })}
      </ul>
    </section>
  );
};

export default Cart;
