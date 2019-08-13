import fs from 'fs';
import { MatchResult } from './MatchResult';

const matches = fs
  .readFileSync('./resources/football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map(
    (row: string): string[] => {
      return row.split(',');
    }
  );

let manUtdWins = 0;

for (let match of matches) {
  if (
    (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
  ) {
    manUtdWins++;
  }
}

console.log(`Man United won ${manUtdWins} games`);
