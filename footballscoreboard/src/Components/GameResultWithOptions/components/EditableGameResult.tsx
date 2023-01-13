import { FC, useContext } from "react";

import { GameResultContext } from "../context";

import { Box, Flex } from "@chakra-ui/react";
import { TeamScoreDisplay } from "../../TeamScoreDisplay";

import { Game } from "../../../Models";

type EditableGameResult = {
  game: Game;
  isEditable?: boolean;
};

export const EditableGameResult: FC<EditableGameResult> = ({
  game,
  isEditable = false,
}) => {
  const { homeTeamScore, setHomeTeamScore, awayTeamScore, setAwayTeamScore } =
    useContext(GameResultContext);
  
  return (
    <Flex justifyContent="space-evenly">
      <TeamScoreDisplay
        name={game.getHomeTeamName()}
        score={homeTeamScore}
        isPlayingHome={true}
        isEditable={isEditable}
        onChange={setHomeTeamScore}
      />
      <Box>-</Box>
      <TeamScoreDisplay
        name={game.getAwayTeamName()}
        score={awayTeamScore}
        isPlayingHome={false}
        isEditable={isEditable}
        onChange={setAwayTeamScore}
      />
    </Flex>
  );
};
