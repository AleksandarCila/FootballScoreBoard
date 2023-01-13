import { FINISH_GAME } from "./types";
import { Game } from "../../Models/Game";

export type FinishGameAction = {
  type: typeof FINISH_GAME;
  payload: string;
};

export const finishGame = (gameId: string):FinishGameAction => {
    return {
      type: FINISH_GAME,
      payload: gameId,
    };
  };
