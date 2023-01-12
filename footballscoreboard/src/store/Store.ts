import { combineReducers, createStore} from 'redux';
import {gameReducer, GameReducerState} from './reducers';

const reducers = combineReducers({ games: gameReducer });
export const store = createStore(reducers);

export type StoreState = {
    games: GameReducerState
}