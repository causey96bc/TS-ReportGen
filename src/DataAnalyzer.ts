import { MatchData } from "./MatchData";

export interface Analyzer {
  run(matches: MatchData[]): string;
}
export interface OutputTarget {
  print(report: string): void;
}
export class DataSummary {
  constructor(public analyzer: Analyzer, public outPutTarget: OutputTarget) {}
  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outPutTarget.print(output);
    console.log("output", output);
  }
};
