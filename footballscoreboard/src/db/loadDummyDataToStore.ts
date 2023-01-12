import { data } from "./dummy_data"
import { Game } from "../Models/Game"

export const loadDummyDataToStore = () => {
    return data.map((game,ind)=>{
        const newGame = new Game(game.home.name,game.away.name);
        newGame.setScore(game.home.score,game.away.score);
        return newGame;
    })

}