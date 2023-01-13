import { useState, useEffect } from "react";

const areTeamNamesSame = (home: string, away: string) => {
  if (home === away) return true;
  return false;
};

export const useNamesValidation = (
  homeTeam: string,
  awayTeam: string,
) => {
  const [areNamesInvalid, setAreNamesInvalid] = useState(false);

  const [error, setError] = useState("");

  const setInvalidStateAndError = (newInvalidState: boolean, newError = "") => {
    setAreNamesInvalid(newInvalidState);
    setError(`${newError}`);
  };

  useEffect(
    function checkIfNamesAreValid() {
      if (homeTeam.length > 0 && awayTeam.length > 0) {
        if (areTeamNamesSame(homeTeam, awayTeam)) {
          setInvalidStateAndError(
            true,
            "Same teams can not play against each other"
          );
        } else {
          setInvalidStateAndError(false);
        }
      } else {
        setInvalidStateAndError(true);
      }
    },
    [homeTeam, awayTeam]
  );

  return {
    areNamesInvalid,
    error
  };
};
