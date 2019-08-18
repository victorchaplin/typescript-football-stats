import { CsvFileReader } from './readers/CsvFileReader';
import { MatchData } from './types/MatchData';
import { MatchResult } from './types/MatchResult';
import { dateStringToDate } from './utils/utils';

export class MatchReader {
  static readMatchesFromCsv(filename: string): MatchReader {
    const csvReader = new CsvFileReader(filename);
    return new MatchReader(csvReader);
  }

  dataReader: DataReader;
  matches: MatchData[] = [];

  constructor(dataReader: DataReader) {
    this.dataReader = dataReader;
  }

  loadData(): void {
    this.dataReader.readData();
    this.matches = this.dataReader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ];
      }
    );
  }
}
