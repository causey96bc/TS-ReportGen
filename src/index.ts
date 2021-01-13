import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";
const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// const dateOfFirstMatch = reader.data[0][0];
// console.log(dateOfFirstMatch);
let manUnitedWins = 0;
      for (let match of matchReader.matches) {
        if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
          manUnitedWins++;
        } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
          manUnitedWins++;
        }
      }
console.log(`man united won ${manUnitedWins} games`);
