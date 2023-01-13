import { loadDummyDataToStore } from "./../../db/loadDummyDataToStore";
import { START_GAME, FINISH_GAME } from "../actions/types";

import { StartNewGameAction } from "../actions/startNewGame";
import { FinishGameAction } from "../actions/finishGame";

// import { IUserActionModel, IUser } from '../model';

const initalState = loadDummyDataToStore();

type reducerAction = StartNewGameAction | FinishGameAction;

export type GameReducerState = typeof initalState;

export const gameReducer = (state = initalState, action: reducerAction) => {
  const { type, payload } = action;
  switch (type) {
    case START_GAME:
      return [...state, payload];
    case FINISH_GAME:
      const gameId = payload;
      return state.filter((game) => game.id !== gameId);
    default:
      return state;
  }
};
