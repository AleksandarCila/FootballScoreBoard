import { SimpleGrid } from "@chakra-ui/react";

import { BoardElement } from "./components";
import { Summary } from "../Summary";

export const Board = () => {
  return (
    <SimpleGrid minChildWidth="600px">
      <BoardElement title="System Data">System Data</BoardElement>
      <BoardElement title="Summary"><Summary/></BoardElement>
    </SimpleGrid>
  );
};
