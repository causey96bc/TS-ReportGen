import { OutputTarget } from "../DataAnalyzer";

export class ConsoleReport implements OutputTarget{
    print(report: string): void{
        console.log(report);
    }
}