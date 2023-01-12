import { TeamScore } from "./TeamScore";
import { Team } from "./Team";

export class Game {
  home: TeamScore;
  away: TeamScore;

  constructor(homeTeamName: string, awayTeamName: string) {
    this.home = new TeamScore(homeTeamName)
    this.away = new TeamScore(awayTeamName)
  }
}
