import { MatchData } from '../types/MatchData';
import { MatchResult } from '../types/MatchResult';
import { Analysis } from './Analysis';

export class WinsAnalysis implements Analysis {
  teamName: string;

  constructor(teamName: string) {
    this.teamName = teamName;
  }

  run(matches: MatchData[]): string {
    let teamWins = 0;

    for (let match of matches) {
      if (
        (match[1] === this.teamName && match[5] === MatchResult.HomeWin) ||
        (match[2] === this.teamName && match[5] === MatchResult.AwayWin)
      ) {
        teamWins++;
      }
    }

    return `Team ${this.teamName} won ${teamWins} games`;
  }
}
