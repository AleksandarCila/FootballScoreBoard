import { START_GAME } from "./types";
import { Game } from "../../Models/Game";

export type Action = {
  type: typeof START_GAME;
  payload: Game;
};

export const startNewGame = (game: Game):Action => {
    return {
      type: START_GAME,
      payload: game,
    };
  };
