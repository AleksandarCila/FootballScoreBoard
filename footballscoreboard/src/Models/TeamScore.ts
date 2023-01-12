import { Team } from "./Team";

export class TeamScore {
  team: Team;
  score: number;

  constructor(name: string) {
    this.team = { name };
    this.score = 0;
  }

  getTeamName() {
    return this.team.name;
  }

  getScoredGoals() {
    return this.score;
  }
}
