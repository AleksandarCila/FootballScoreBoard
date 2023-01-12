import { useEffect, useState } from "react";

export const useValidateTeamNames = (homeTeam: string, awayTeam: string) => {
  const [isStartDisabled, setIsStartDisabled] = useState(false);

  useEffect(
    function enableStartIfNamesAreValid() {
      if (homeTeam.length > 0 && awayTeam.length > 0) {
        setIsStartDisabled(false);
      } else {
        setIsStartDisabled(true);
      }
    },
    [homeTeam, awayTeam]
  );

  return {
    isStartDisabled,
  };
};
