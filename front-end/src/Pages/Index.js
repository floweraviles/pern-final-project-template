import GamesList from "../Components/GamesList"

const Index = ({addGameToShoppingCart}) => {
    
    return (
        <section>
            <h1>All Our Games</h1>
            <GamesList addGameToShoppingCart={addGameToShoppingCart}/>
        </section>
    )
}

export default Index