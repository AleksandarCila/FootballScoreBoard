import { useSelector } from "react-redux";

import { StoreState } from "../../store/Store";

import { Flex } from "@chakra-ui/react";
import { GameResultWithOptions } from "../GameResultWithOptions";
import { NewGame } from "../NewGame";

export const SystemData = () => {
  const games = useSelector((state: StoreState) => state.games);

  return (
    <Flex flexDirection="column">
      <NewGame />
      {games.map((game) => (
        <GameResultWithOptions key={game.id} game={game} />
      ))}
    </Flex>
  );
};
