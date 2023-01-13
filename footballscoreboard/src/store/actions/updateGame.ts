import { UPDATE_GAME } from "./types";
import { Game } from "../../Models/Game";

export type UpdateGameAction = {
  type: typeof UPDATE_GAME;
  payload: Game;
};

export const updateGame = (game: Game):UpdateGameAction => {
    return {
      type: UPDATE_GAME,
      payload: game,
    };
  };
