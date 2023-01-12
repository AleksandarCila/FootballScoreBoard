import { useState } from "react";

import { BasicInput } from "../Inputs";

export const NewGame = () => {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");

  return (
    <div>
      <BasicInput value={homeTeam} onChange={setHomeTeam} label="Home Team"/>
    </div>
  );
};
