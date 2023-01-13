import { START_GAME } from "./types";
import { Game } from "../../Models/Game";

export type StartNewGameAction = {
  type: typeof START_GAME;
  payload: Game;
};

export const startNewGame = (game: Game):StartNewGameAction => {
    return {
      type: START_GAME,
      payload: game,
    };
  };
