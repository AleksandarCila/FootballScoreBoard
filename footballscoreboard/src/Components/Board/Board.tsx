import { SimpleGrid } from "@chakra-ui/react";

import { BoardElement } from "./components";
import { Summary } from "../Summary";
import { SystemData } from "../SystemData";

export const Board = () => {
  return (
    <SimpleGrid minChildWidth="600px">
      <BoardElement title="System Data"><SystemData/></BoardElement>
      <BoardElement title="Summary"><Summary/></BoardElement>
    </SimpleGrid>
  );
};
