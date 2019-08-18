import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.readMatchesFromCsv('resources/football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Everton', 'report');

matchReader.loadData();
summary.buildAndPrintReport(matchReader.matches);
