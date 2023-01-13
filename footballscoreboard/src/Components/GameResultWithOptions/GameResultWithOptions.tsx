import { FC, useState } from "react";

import { GameResultContext } from "./context";

import { Flex } from "@chakra-ui/react";
import { GameOptions } from "./components";
import { EditableGameResult } from "./components";

import { Game } from "../../Models/Game";

type GameResultWithOptionsProps = {
  game: Game;
};

export const GameResultWithOptions: FC<GameResultWithOptionsProps> = ({
  game,
}) => {
  const [homeTeamScore, setHomeTeamScore] = useState(
    game.getHomeTeamScoredGoals()
  );
  const [awayTeamScore, setAwayTeamScore] = useState(
    game.getAwayTeamScoredGoals()
  );

  const contextValue = {
    homeTeamScore,
    setHomeTeamScore,
    awayTeamScore,
    setAwayTeamScore,
  };

  return (
    <GameResultContext.Provider value={contextValue}>
      <Flex justifyContent="space-evenly">
        <EditableGameResult game={game} isEditable={true} />
        <GameOptions />
      </Flex>
    </GameResultContext.Provider>
  );
};
