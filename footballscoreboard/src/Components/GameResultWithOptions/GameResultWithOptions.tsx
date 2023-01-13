import { FC, useState } from "react";

import { Flex } from "@chakra-ui/react";
import { EditableGameScore, GameOptions } from "./components";

import { Game } from "../../Models/Game";

type GameResultWithOptionsProps = {
  game: Game;
};

export const GameResultWithOptions: FC<GameResultWithOptionsProps> = ({
  game,
}) => {
  const [homeScore, setHomeScore] = useState(game.getHomeTeamScoredGoals());
  const [awayScore, setAwayScore] = useState(game.getAwayTeamScoredGoals());



  return (
    <Flex justifyContent="space-evenly">
      <EditableGameScore game={game}/>
      <GameOptions />
    </Flex>
  );
};
