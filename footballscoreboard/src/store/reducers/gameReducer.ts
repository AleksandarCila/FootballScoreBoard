import { loadDummyDataToStore } from "./../../db/loadDummyDataToStore";
import { START_GAME, FINISH_GAME, UPDATE_GAME } from "../actions/types";

import {
  UpdateGameAction,
  FinishGameAction,
  StartNewGameAction,
} from "../actions";

// import { IUserActionModel, IUser } from '../model';

const initalState = loadDummyDataToStore();

type reducerAction = StartNewGameAction | FinishGameAction | UpdateGameAction;

export type GameReducerState = typeof initalState;

export const gameReducer = (state = initalState, action: reducerAction) => {
  const { type, payload } = action;
  switch (type) {
    case START_GAME:
      return [...state, payload];
    case FINISH_GAME:
      const gameId = payload;
      return state.filter((game) => game.id !== gameId);
    case UPDATE_GAME:
      const newGame = payload;
      return state.map((game) => {
        if (game.id === newGame.id) return newGame;
        else return game;
      });
    default:
      return state;
  }
};
