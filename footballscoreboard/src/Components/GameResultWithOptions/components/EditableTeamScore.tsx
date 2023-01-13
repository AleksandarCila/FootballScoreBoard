import { FC } from "react";

import { Flex, Text } from "@chakra-ui/react";
import { TeamScore } from "../../../Models";

type EditableTeamScoreProps = {
  teamScore: TeamScore;
  isPlayingHome: boolean;
};

export const EditableTeamScore: FC<EditableTeamScoreProps> = ({
  teamScore,
  isPlayingHome,
}) => {
  const flexDirection = isPlayingHome ? "row" : "row-reverse";
  return (
    <Flex flexDirection={flexDirection} gap={2} mx={3}>
      <Text>{teamScore.getTeamName()}</Text>
      <Text>{teamScore.getScoredGoals()}</Text>
    </Flex>
  );
};
