"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var DataAnalyzer_1 = require("./DataAnalyzer");
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
var summary = DataAnalyzer_1.DataSummary.winsWithHtmlReport('Man United');
// new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
