import { useState, useEffect } from "react";

const areTeamNamesSame = (home:string, away:string) => {
    if(home === away) return true;
    return false;
}

export const useNamesValidation = (homeTeam: string, awayTeam: string) => {
  const [areNamesInvalid, setAreNamesInvalid] = useState(false);

  useEffect(
    function checkIfNamesAreValid() {
      if (homeTeam.length > 0 && awayTeam.length > 0) {
        if (areTeamNamesSame(homeTeam, awayTeam)) setAreNamesInvalid(true);
        else setAreNamesInvalid(false);
      } else {
        setAreNamesInvalid(true);
      }
    },
    [homeTeam, awayTeam]
  );

  return {
    areNamesInvalid
  }
};
