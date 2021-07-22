const GameListItem = ({game}) => {
    return(
        <li>
            <h2>{game.name}</h2>
            <img src={game.box_image} alt="game-image"/>
            <h3>{game.console}</h3>
            <p>This game was release in {game.release_date} and it cost {game.price}USD$</p>
            {game.favorites ? <p>It's people's favorite</p> : <p>It's not people's favorite</p>}
        </li>
    )
}

export default GameListItem
