"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSummary = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReports_1 = require("./reportTargets/HtmlReports");
var DataSummary = /** @class */ (function () {
    function DataSummary(analyzer, outPutTarget) {
        this.analyzer = analyzer;
        this.outPutTarget = outPutTarget;
    }
    DataSummary.winsWithHtmlReport = function (team) {
        return new DataSummary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HtmlReports_1.HtmlReport());
    };
    DataSummary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outPutTarget.print(output);
        console.log("output", output);
    };
    return DataSummary;
}());
exports.DataSummary = DataSummary;
;
