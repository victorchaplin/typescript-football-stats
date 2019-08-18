import { Analysis } from './analyses/Analysis';
import { WinsAnalysis } from './analyses/WinsAnalysis';
import { HtmlReport } from './reports/HtmlReport';
import { Report } from './reports/Report';
import { MatchData } from './types/MatchData';

export class Summary {
  static winsAnalysisWithHtmlReport(teamName: string, filename: string): Summary {
    const analysis = new WinsAnalysis(teamName);
    const report = new HtmlReport(filename);

    return new Summary(analysis, report);
  }

  analysis: Analysis;
  report: Report;

  constructor(analysis: Analysis, report: Report) {
    this.analysis = analysis;
    this.report = report;
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analysis.run(matches);
    this.report.print(output);
  }
}
