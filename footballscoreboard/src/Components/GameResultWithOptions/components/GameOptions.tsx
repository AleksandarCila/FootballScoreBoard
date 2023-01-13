import { useContext } from "react";
import { GameResultContext } from "../context";

import { Button, Stack } from "@chakra-ui/react";

export const GameOptions = () => {
  const { handleFinishGame, handleUpdateGame } = useContext(GameResultContext);

  return (
    <Stack>
      <Button onClick={handleFinishGame}>Finish</Button>
      <Button onClick={handleUpdateGame}>Update</Button>
    </Stack>
  );
};
