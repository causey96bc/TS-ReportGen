import { OutputTarget } from "../DataAnalyzer";
import fs from "fs";
export class HtmlReport implements OutputTarget{
    print( report:string): void{
        const html = `<div>
        <h1>Analysis results</h1>
        <div>${report}</div>
        </div>
        `;
        fs.writeFileSync('report.html', html)
    }
}