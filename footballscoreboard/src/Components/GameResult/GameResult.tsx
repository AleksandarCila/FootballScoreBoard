import { FC } from "react";

import { Box, Flex } from "@chakra-ui/react";
import { TeamScoreDisplay } from "./components";

import { Game } from "../../Models/Game";

type GameResult = {
  game: Game;
};

export const GameResult: FC<GameResult> = ({ game }) => {
  return (
    <Flex justifyContent="space-evenly">
      <TeamScoreDisplay teamScore={game.home} isPlayingHome={true} />
      <Box>-</Box>
      <TeamScoreDisplay teamScore={game.away} isPlayingHome={false} />
    </Flex>
  );
};
