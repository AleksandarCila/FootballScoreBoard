import { useSelector } from "react-redux";

import { StoreState } from "../../store/Store";

import { SimpleGrid } from "@chakra-ui/react";

import { BoardElement } from "./components";

export const Board = () => {
  const games = useSelector((state: StoreState) => state.games);
  return (
    <SimpleGrid minChildWidth="600px">
      <BoardElement title="System Data">
        System Data
      </BoardElement>
      <BoardElement title="Summary">
        Summary
      </BoardElement>
    </SimpleGrid>
  );
};
