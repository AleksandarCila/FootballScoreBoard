import React, { createContext } from "react";

type GameResultContextType = {
  homeTeamScore: number;
  setHomeTeamScore: React.Dispatch<React.SetStateAction<number>>;
  awayTeamScore: number;
  setAwayTeamScore: React.Dispatch<React.SetStateAction<number>>;
  handleFinishGame: () => void;
  handleUpdateGame: () => void;
};

export const GameResultContext = createContext<GameResultContextType>({
  homeTeamScore: 0,
  setHomeTeamScore: () => {},
  awayTeamScore: 0,
  setAwayTeamScore: () => {},
  handleFinishGame: () => {},
  handleUpdateGame: () => {},
});
