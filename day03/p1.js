const fs = require('fs');

const file = fs.readFileSync("input.txt", "utf8");
const lines = file.split(/\r?\n/);

let result = 0;

lines.forEach((line, lineIndex) => {
  const numbersInLine = [...line.matchAll(/\d+/g)];
  if (numbersInLine.length > 0) {
    for (let i = 0; i < numbersInLine.length; i++) {
      const startIndex = numbersInLine[i].index;
      const endIndex = numbersInLine[i].index + numbersInLine[i][0].length;

      let found = false;

      let leftPadding = 0;
      let rightPadding = 0;

      if (startIndex > 0) {
        leftPadding = startIndex - 1;
      }

      if (rightPadding < line.length) {
        rightPadding = endIndex + 1;
      }

      let prevLine = lines[lineIndex - 1];
      let nextLine = lines[lineIndex + 1];

      let currentLine = line.slice(leftPadding, rightPadding);
      let currentLineSymbols = [...currentLine.matchAll(/[^a-zA-Z0-9.]/g)];
      if (currentLineSymbols.length > 0 && !found) {
        found = true;
        result += parseInt(numbersInLine[i][0]);
        // console.log(numbersInLine[i][0]);
      }

      if (prevLine !== undefined) {
        let prevLinePad = prevLine.slice(leftPadding, rightPadding);
        let prevLineSymbols = [...prevLinePad.matchAll(/[^a-zA-Z0-9.]/g)];
        if (prevLineSymbols.length > 0 && !found) {
          found = true;
          result += parseInt(numbersInLine[i][0]);
          // console.log(numbersInLine[i][0]);
        }
      }

      if (nextLine !== undefined) {
        let nextLinePad = nextLine.slice(leftPadding, rightPadding);
        let nextLineSymbols = [...nextLinePad.matchAll(/[^a-zA-Z0-9.]/g)];
        if (nextLineSymbols.length > 0 && !found) {
          found = true;
          result += parseInt(numbersInLine[i][0]);
          // console.log(numbersInLine[i][0]);
        }
      }
    }
  }
});



console.log(result);