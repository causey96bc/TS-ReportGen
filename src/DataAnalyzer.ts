import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReports";
export interface Analyzer {
  run(matches: MatchData[]): string;
}
export interface OutputTarget {
  print(report: string): void;
}
export class DataSummary {
  static winsWithHtmlReport(team: string): DataSummary{
    return new DataSummary(
      new WinsAnalysis('Man United'),
      new HtmlReport(),
    )
  }
  constructor(public analyzer: Analyzer, public outPutTarget: OutputTarget) {}
  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outPutTarget.print(output);
    console.log("output", output);
  }
};
