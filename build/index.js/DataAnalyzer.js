"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSummary = void 0;
var DataSummary = /** @class */ (function () {
    function DataSummary(analyzer, outPutTarget) {
        this.analyzer = analyzer;
        this.outPutTarget = outPutTarget;
    }
    DataSummary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outPutTarget.print(output);
    };
    return DataSummary;
}());
exports.DataSummary = DataSummary;
