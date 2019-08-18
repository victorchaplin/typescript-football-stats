import { Report } from './Report';

export class ConsoleReport implements Report {
  print(report: string): void {
    console.log(report);
  }
}
