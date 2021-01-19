import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { DataSummary } from "./DataAnalyzer";
import { HtmlReport } from "./reportTargets/HtmlReports";

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();
const summary = DataSummary.winsWithHtmlReport('Man United')
// new HtmlReport());

summary.buildAndPrintReport(matchReader.matches)

