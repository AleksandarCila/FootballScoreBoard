import { loadDummyDataToStore } from './../../db/loadDummyDataToStore';
import { START_GAME } from '../actions/types';

import { Action as StartNewGameAction } from '../actions/startNewGame';

// import { IUserActionModel, IUser } from '../model';

const initalState = loadDummyDataToStore();

type reducerAction = StartNewGameAction

export type GameReducerState = typeof initalState;

export const gameReducer = (state = initalState, action: reducerAction) => {
  const { type, payload } = action;
  switch (type) {
    case START_GAME:
      return [...state, payload];
    // case DELETE_USER:
    //   const { name } = payload;
    //   return state.filter((e) => e.name !== name);
    default:
      return state;
  }
};