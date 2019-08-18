import { MatchData } from '../types/MatchData';

export interface Analysis {
  run(matches: MatchData[]): string;
}
