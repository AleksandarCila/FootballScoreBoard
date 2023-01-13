import { Game } from "../../../Models/Game";

export const sortGamesByDateAndScore = (games: Game[]) => {
  return games.map((game)=>game).sort((gameA, gameB) => {
    if (gameA.hasMoreGoalsThan(gameB)) return -1;
    if (gameA.hasLessGoalsThan(gameB)) return 1;
    if (gameA.isOlderThan(gameB)) return 1;
    return -1;
  });
};
