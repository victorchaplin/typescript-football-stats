import fs from 'fs';

export class CsvFileReader implements DataReader {
  data: string[][] = [];
  filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  readData(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map(
        (row: string): string[] => {
          return row.split(',');
        }
      );
  }
}
