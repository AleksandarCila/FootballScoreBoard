import { TeamScore } from "./TeamScore";
import { v4 as uuidv4 } from "uuid";

export class Game {
  home: TeamScore;
  away: TeamScore;
  id: string;
  created_at: Date;

  constructor(homeTeamName: string, awayTeamName: string) {
    this.home = new TeamScore(homeTeamName);
    this.away = new TeamScore(awayTeamName);
    this.id = uuidv4();
    this.created_at = new Date();
  }

  setScore(homeScore: number, awayScore: number) {
    if (homeScore >= 0 && awayScore >= 0) {
      this.home.score = homeScore;
      this.away.score = awayScore;
    }
  }

  getHomeTeamName() {
    return this.home.team.name;
  }

  getHomeTeamScoredGoals() {
    return this.home.score;
  }

  getAwayTeamName() {
    return this.away.team.name;
  }

  getAwayTeamScoredGoals() {
    return this.away.score;
  }

  getTotalGoalsScored() {
    return this.home.getScoredGoals() + this.away.getScoredGoals();
  }

  isOlderThan(game:Game){
    if(this.created_at.getTime() < game.created_at.getTime()) return true;
    else return false;
  }

  hasMoreGoalsThan(game:Game){
    if(this.getTotalGoalsScored() > game.getTotalGoalsScored()) return true;
    else return false;
  }

  hasLessGoalsThan(game:Game){
    if(this.getTotalGoalsScored() < game.getTotalGoalsScored()) return true;
    else return false;
  }
}
