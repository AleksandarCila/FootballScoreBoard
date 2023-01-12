import { useMemo } from "react";

import { useSelector } from "react-redux";

import { StoreState } from "../../store/Store";

import { Box } from "@chakra-ui/react";
import { GameResult } from "../GameResult";

export const Summary = () => {
  const games = useSelector((state: StoreState) => state.games);

  const orderedGamesByScore = useMemo(() => {}, [games]);

  return (
    <Box>
      {games.map((game) => (
        <GameResult key={game.id} game={game} />
      ))}
    </Box>
  );
};
