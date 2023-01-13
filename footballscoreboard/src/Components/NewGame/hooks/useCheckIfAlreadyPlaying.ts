import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { StoreState } from "../../../store/Store";

export const useCheckIfAlreadyPlaying = (
  homeTeam: string,
  awayTeam: string,
) => {
  const [teamAlreadyPlaying, setTeamAlreadyPlaying] = useState(false);

  const games = useSelector((state: StoreState) => state.games);

  useEffect(function disableStartIfTeamsAlreadyPlaying() {
    const homeOrAwayNotPlaying = games.every((game)=>{
        if(game.hasTeamPlaying(homeTeam) || game.hasTeamPlaying(awayTeam)) return false;
        return true;
    })
    setTeamAlreadyPlaying(!homeOrAwayNotPlaying)
  }, [homeTeam,awayTeam,games]);

  return {
    teamAlreadyPlaying
  }
};
