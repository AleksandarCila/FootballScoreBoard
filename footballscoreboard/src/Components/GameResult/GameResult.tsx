import { FC } from "react";

import { Box, Flex } from "@chakra-ui/react";
import { TeamScoreDisplay } from "./../TeamScoreDisplay";

import { Game } from "../../Models/Game";

type GameResult = {
  game: Game;
  isEditable?: boolean;
};

export const GameResult: FC<GameResult> = ({ game, isEditable = false }) => {
  return (
    <Flex justifyContent="space-evenly">
      <TeamScoreDisplay
        name={game.getHomeTeamName()}
        score={game.getHomeTeamScoredGoals()}
        isPlayingHome={true}
        isEditable={isEditable}
      />
      <Box>-</Box>
      <TeamScoreDisplay
        name={game.getAwayTeamName()}
        score={game.getAwayTeamScoredGoals()}
        isPlayingHome={false}
        isEditable={isEditable}
      />
    </Flex>
  );
};
