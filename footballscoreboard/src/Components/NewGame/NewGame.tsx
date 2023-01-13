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
    <Flex justifyContent="space-evenly">
      <BasicInput value={homeTeam} onChange={setHomeTeam} label="Home Team" />
      <Box>-</Box>
      <BasicInput value={awayTeam} onChange={setAwayTeam} label="Away Team" />
      <Tooltip
        hasArrow
        color="red.300"
        label={error}
        isOpen={shouldDisplayError}
      >
        <Button onClick={handleStartNewGame} disabled={isStartDisabled}>
          Start
        </Button>
      </Tooltip>
    </Flex>
  );
};
