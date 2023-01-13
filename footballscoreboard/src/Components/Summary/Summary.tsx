import { useMemo } from "react";

import { useSelector } from "react-redux";

import { StoreState } from "../../store/Store";

import { Box } from "@chakra-ui/react";
import { GameResult } from "../GameResult";

import { sortGamesByDateAndScore } from "./helpers";

export const Summary = () => {
  const games = useSelector((state: StoreState) => state.games);

  const orderedGamesByScore = useMemo(() => {
    return sortGamesByDateAndScore(games);
  }, [games]);


  return (
    <Box>
      {orderedGamesByScore.map((game) => (
        <GameResult key={game.id} game={game} />
      ))}
    </Box>
  );
};
