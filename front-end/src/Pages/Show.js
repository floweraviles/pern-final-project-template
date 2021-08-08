import GameDetails from "../Components/GameDetails";

function Show({ addGameToShoppingCart}) {
  return (
    <section className="Show">
      <h1>Game Details</h1>
      <GameDetails
        addGameToShoppingCart={addGameToShoppingCart}
       
      />
    </section>
  );
}

export default Show;
