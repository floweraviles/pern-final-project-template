import axios from "axios"
import {useState, useEffect} from "react"
import { apiURL } from "../util/apiURL"
import GameListItem from "./GameListItem"


const API = apiURL()

const GamesList = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const res = await axios.get(`${API}/games`)
                setGames(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchGames()
    }, [])

    return (
        <div>
            <ul>
                {games.map(game => {
                    return <GameListItem key={game.id} game={game} />
                })}
            </ul>
        </div>
    )
}

export default GamesList;