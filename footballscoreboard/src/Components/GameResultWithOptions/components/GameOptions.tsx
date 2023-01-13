import { useContext } from "react";
import { GameResultContext } from "../context";

import { Button, Stack } from "@chakra-ui/react";

export const GameOptions = () => {
  const { handleFinishGame, handleUpdateGame } = useContext(GameResultContext);

  return (
    <Stack>
      <Button onClick={handleFinishGame} width="100px">Finish</Button>
      <Button onClick={handleUpdateGame} width="100px">Update</Button>
    </Stack>
  );
};
