import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const csvReader = new MatchReader('resources/football.csv');
csvReader.read();

const matches = csvReader.data;

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
