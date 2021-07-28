import GameNewForm from "../Components/GameNewForm";
import "../Styles/GameEditForm.css";

function New() {
  return (
    <section className="game-edit-section">
      <h2>New Game</h2>
      <GameNewForm />
    </section>
  );
}
export default New;
