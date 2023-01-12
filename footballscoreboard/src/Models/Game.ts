import { TeamScore } from "./TeamScore";
import { Team } from "./Team";

export class Game {
  home: TeamScore;
  away: TeamScore;

  constructor(homeTeam: Team, awayTeam: Team) {
    this.home = new TeamScore(homeTeam.name)
    this.away = new TeamScore(awayTeam.name)
  }
}
