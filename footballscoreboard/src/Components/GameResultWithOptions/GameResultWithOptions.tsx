import { FC, useState } from "react";

import { useDispatch } from "react-redux";
import { finishGame, updateGame } from "../../store/actions";

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

  const dispatch = useDispatch();

  const handleFinishGame = () => {
    dispatch(finishGame(game.id));
  };

  const handleUpdateGame = () => {
    const gameUpdated = game;
    gameUpdated.setScore(homeTeamScore, awayTeamScore);
    dispatch(updateGame(gameUpdated));
  };

  const contextValue = {
    homeTeamScore,
    setHomeTeamScore,
    awayTeamScore,
    setAwayTeamScore,
    handleFinishGame,
    handleUpdateGame,
  };

  return (
    <GameResultContext.Provider value={contextValue}>
      <Flex justifyContent="space-evenly" alignItems="center" gap={5} m="2">
        <EditableGameResult game={game} isEditable={true} />
        <GameOptions />
      </Flex>
    </GameResultContext.Provider>
  );
};
