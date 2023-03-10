import { useState } from "react";

import { useDispatch } from "react-redux";
import { startNewGame } from "../../store/actions";

import { Box, Button, Flex, Tooltip } from "@chakra-ui/react";
import { BasicInput } from "../Inputs";

import { Game } from "../../Models/Game";
import { useValidateTeams } from "./hooks";

export const NewGame = () => {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");

  const [error, setError] = useState("");

  const shouldDisplayError = error.length > 0;

  const dispatch = useDispatch();

  const { isStartDisabled } = useValidateTeams(homeTeam, awayTeam, setError);

  const handleStartNewGame = () => {
    const newGame = new Game(homeTeam, awayTeam);
    dispatch(startNewGame(newGame));
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" m="2" gap={5}>
      <Flex flex={1} justifyContent="center" gap={2}>
        <BasicInput value={homeTeam} onChange={setHomeTeam} label="Home Team" />
        <Box>-</Box>
        <BasicInput value={awayTeam} onChange={setAwayTeam} label="Away Team" />
      </Flex>
      <Tooltip
        hasArrow
        color="red.300"
        label={error}
        isOpen={shouldDisplayError}
      >
        <Button onClick={handleStartNewGame} disabled={isStartDisabled} width="100px">
          Start
        </Button>
      </Tooltip>
    </Flex>
  );
};
