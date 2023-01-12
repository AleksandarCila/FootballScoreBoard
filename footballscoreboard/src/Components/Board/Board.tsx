import { useSelector } from "react-redux";

import { StoreState } from "../../store/Store";

import { Box } from "@chakra-ui/react";

export const Board = () => {
  const games = useSelector((state: StoreState) => state.games);
  return (
    <Box>
      {games && games.map((game, ind) => (
        <div key={ind}>{game.home.team.name}</div>
      ))}
    </Box>
  );
};
