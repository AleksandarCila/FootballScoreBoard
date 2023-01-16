import { FC, useContext } from "react";

import { GameResultContext } from "../context";

import { Box, Flex } from "@chakra-ui/react";
import { TeamScoreDisplay } from "../../TeamScoreDisplay";

import { Game } from "../../../Models";

type EditableGameResultProps = {
  game: Game;
  isEditable?: boolean;
};

export const EditableGameResult: FC<EditableGameResultProps> = ({
  game,
  isEditable = false,
}) => {
  const { homeTeamScore, setHomeTeamScore, awayTeamScore, setAwayTeamScore } =
    useContext(GameResultContext);

  return (
    <Flex
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
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
