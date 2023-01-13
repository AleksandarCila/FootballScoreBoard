import { FC } from "react";

import { Flex, Box } from "@chakra-ui/react";
import { EditableTeamScore } from "./EditableTeamScore";

import { Game } from "../../../Models";

type EditableGameScoreProps = {
  game: Game;
};

export const EditableGameScore: FC<EditableGameScoreProps> = ({ game }) => {
  return (
    <Flex justifyContent="space-evenly">
      <EditableTeamScore teamScore={game.home} isPlayingHome={true} />
      <Box>-</Box>
      <EditableTeamScore teamScore={game.away} isPlayingHome={false} />
    </Flex>
  );
};
