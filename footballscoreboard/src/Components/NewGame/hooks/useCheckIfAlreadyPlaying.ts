import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { StoreState } from "../../../store/Store";
import { Game } from "../../../Models/Game";

export const useCheckIfAlreadyPlaying = (
  homeTeam: string,
  awayTeam: string,
) => {
  const [teamAlreadyPlaying, setTeamAlreadyPlaying] = useState(false);

  const [error, setError] = useState("");

  const games = useSelector((state: StoreState) => state.games);

  const checkIfTeamIsPlaying = (game: Game, team: string) => {
    if (game.hasTeamPlaying(team)) {
      setError(`${team} is already playing.`);
      return true;
    }
    setError("");
    return false;
  };

  useEffect(
    function disableStartIfTeamsAlreadyPlaying() {
      const homeOrAwayNotPlaying = games.every((game) => {
        if (
          checkIfTeamIsPlaying(game, homeTeam) ||
          checkIfTeamIsPlaying(game, awayTeam)
        )
          return false;
        return true;
      });
      setTeamAlreadyPlaying(!homeOrAwayNotPlaying);
    },
    [homeTeam, awayTeam, games]
  );

  return {
    teamAlreadyPlaying,
    error
  };
};
