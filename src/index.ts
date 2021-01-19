import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { DataSummary } from "./DataAnalyzer";
import { HtmlReport } from "./reportTargets/HtmlReports";

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);

const summary = new DataSummary(
new WinsAnalysis('Watford'), 
new ConsoleReport())
// new HtmlReport());

summary.buildAndPrintReport(matchReader.matches)

