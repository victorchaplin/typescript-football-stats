import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';

const csvReader = new CsvFileReader('resources/football.csv');
const matchReader = new MatchReader(csvReader);

matchReader.loadData();

let manUtdWins = 0;

for (let match of matchReader.matches) {
  if (
    (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
  ) {
    manUtdWins++;
  }
}

console.log(`Man United won ${manUtdWins} games`);
