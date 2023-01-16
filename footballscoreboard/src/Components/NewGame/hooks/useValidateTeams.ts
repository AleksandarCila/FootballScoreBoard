import React, { useEffect, useState } from "react";

import { useCheckIfAlreadyPlaying } from "./useCheckIfAlreadyPlaying";
import { useNamesValidation } from "./useNamesValidation";

export const useValidateTeams = (
  homeTeam: string,
  awayTeam: string,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  const [isStartDisabled, setIsStartDisabled] = useState(true);

  const { teamAlreadyPlaying, error: alreadyPlayingError } =
    useCheckIfAlreadyPlaying(homeTeam, awayTeam);
    
  const { areNamesInvalid, error: namesValidationError } = useNamesValidation(
    homeTeam,
    awayTeam
  );

  useEffect(
    function enableStartIfTeamsAreValid() {
      if (!teamAlreadyPlaying && !areNamesInvalid) setIsStartDisabled(false);
      else setIsStartDisabled(true);
    },
    [teamAlreadyPlaying, areNamesInvalid]
  );

  useEffect(
    function updateErrorMessage() {
      setError(`${alreadyPlayingError}${namesValidationError}`);
    },
    [alreadyPlayingError, namesValidationError, setError]
  );

  return {
    isStartDisabled,
  };
};
