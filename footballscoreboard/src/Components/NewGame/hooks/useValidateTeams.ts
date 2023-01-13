import { useEffect, useState } from "react";

import { useCheckIfAlreadyPlaying } from "./useCheckIfAlreadyPlaying";
import { useNamesValidation } from "./useNamesValidation";

export const useValidateTeams = (homeTeam: string, awayTeam: string) => {
  const [isStartDisabled, setIsStartDisabled] = useState(true);

  const { teamAlreadyPlaying } = useCheckIfAlreadyPlaying(homeTeam, awayTeam);
  const { areNamesInvalid } = useNamesValidation(homeTeam, awayTeam);

  useEffect(
    function enableStartIfTeamsAreValid() {
      if (!teamAlreadyPlaying && !areNamesInvalid) setIsStartDisabled(false);
      else setIsStartDisabled(true);
    },
    [teamAlreadyPlaying, areNamesInvalid]
  );

  return {
    isStartDisabled,
  };
};
