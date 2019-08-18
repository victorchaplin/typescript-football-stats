import fs from 'fs';
import { Report } from './Report';

export class HtmlReport implements Report {
  filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  print(report: string): void {
    const htmlContent = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync(`${this.filename}.html`, htmlContent);
  }
}
