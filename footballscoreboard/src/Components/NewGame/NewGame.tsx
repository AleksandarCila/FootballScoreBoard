import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";

import { BasicInput } from "../Inputs";

export const NewGame = () => {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");

  return (
    <Flex justifyContent="space-evenly">
      <BasicInput value={homeTeam} onChange={setHomeTeam} label="Home Team" />
      <Box>-</Box>
      <BasicInput value={awayTeam} onChange={setAwayTeam} label="Away Team" />
    </Flex>
  );
};
