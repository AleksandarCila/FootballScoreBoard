import { useSelector } from "react-redux";

import { StoreState } from "../../store/Store";

import { Divider, Flex } from "@chakra-ui/react";
import { GameResultWithOptions } from "../GameResultWithOptions";
import { NewGame } from "../NewGame";

export const SystemData = () => {
  const games = useSelector((state: StoreState) => state.games);

  return (
    <Flex flexDirection="column">
      <NewGame />
      <Divider m="2"/>
      {games.map((game) => (
        <GameResultWithOptions key={game.id} game={game} />
      ))}
    </Flex>
  );
};
