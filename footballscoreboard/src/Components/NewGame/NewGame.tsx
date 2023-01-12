import { useState } from "react";

import { useDispatch } from "react-redux";
import { startNewGame } from "../../store/actions";

import { Box, Button, Flex } from "@chakra-ui/react";
import { BasicInput } from "../Inputs";

import { Game } from "../../Models/Game";

export const NewGame = () => {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");

  const dispatch = useDispatch();

  const handleStartNewGame = () => {
    const newGame = new Game(homeTeam,awayTeam);
    dispatch(startNewGame(newGame));
  }

  return (
    <Flex justifyContent="space-evenly">
      <BasicInput value={homeTeam} onChange={setHomeTeam} label="Home Team" />
      <Box>-</Box>
      <BasicInput value={awayTeam} onChange={setAwayTeam} label="Away Team" />
      <Button onClick={handleStartNewGame}>Start</Button>
    </Flex>
  );
};
