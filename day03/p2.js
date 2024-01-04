const fs = require('fs');

const file = fs.readFileSync("input.txt", "utf8");
const lines = file.split(/\r?\n/);

async function processLinesAsync(lines) {
  let result = 0;

  for (const [lineIndex, line] of lines.entries()) {
    const gearInLine = [...line.matchAll(/[*]/g)];

    if (gearInLine.length > 0) {
      for (let l = 0; l < gearInLine.length; l++) {
        let nums = [];
        let ratio;

        let prevLine = lines[lineIndex - 1];
        let nextLine = lines[lineIndex + 1];

        let currentLineNumbers = await checkForNumbersAsync(line, gearInLine[l].index);
        for (let i = 0; i < currentLineNumbers.length; i++) {
          if (currentLineNumbers[i].length > 0) {
            nums.push(currentLineNumbers[i]);
          }
        }

        if (prevLine !== undefined) {
          let prevLineNumbers = await checkForNumbersAsync(prevLine, gearInLine[l].index);
          for (let i = 0; i < prevLineNumbers.length; i++) {
            if (prevLineNumbers[i].length > 0) {
              nums.push(prevLineNumbers[i]);
            }
          }
        }

        if (nextLine !== undefined) {
          let nextLineNumbers = await checkForNumbersAsync(nextLine, gearInLine[l].index);
          for (let i = 0; i < nextLineNumbers.length; i++) {
            if (nextLineNumbers[i].length > 0) {
              nums.push(nextLineNumbers[i]);
            }
          }
        }

        if (nums.length === 2) {
          ratio = parseInt(nums[0]) * parseInt(nums[1]);
          result += ratio;
        }

        console.log(nums);
      }
    }
  }

  return result;
}

// Example usage:
async function exampleUsage() {
  const linesToProcess = lines;
  const result = await processLinesAsync(linesToProcess);
  console.log(result);
}

exampleUsage();



async function checkForNumbersAsync(string, index) {
  let leftNum = [];
  let rightNum = [];

  if (parseInt(string[index]) || parseInt(string[index]) == 0) {
    let indexNum = parseInt(string[index]);
    let leftCharIndex = index - 1;
    let rightCharIndex = index + 1;
    if (parseInt(string[leftCharIndex]) || parseInt(string[leftCharIndex]) == 0) {
      // console.log(parseInt(string[leftCharIndex]));
      // console.log(string[leftCharIndex]);
      while (parseInt(string[leftCharIndex]) || parseInt(string[leftCharIndex]) == 0) {
        leftNum.push(string[leftCharIndex]);
        leftCharIndex -= 1;
      }
    }

    if (parseInt(string[rightCharIndex]) || parseInt(string[rightCharIndex]) == 0) {
      // console.log(string[rightCharIndex]);
      while (parseInt(string[rightCharIndex]) || parseInt(string[rightCharIndex]) == 0) {
        rightNum.push(string[rightCharIndex]);
        rightCharIndex += 1;
      }
    }

    let num = leftNum.reverse().join('').concat('', indexNum, rightNum.join(''));

    return [num];
  } else {
    let leftCharIndex = index - 1;
    let rightCharIndex = index + 1;
    if (parseInt(string[leftCharIndex]) || parseInt(string[leftCharIndex]) == 0) {
      // console.log(string[leftCharIndex]);
      while (parseInt(string[leftCharIndex]) || parseInt(string[leftCharIndex]) == 0) {
        leftNum.push(string[leftCharIndex]);
        leftCharIndex -= 1;
      }
    }

    if (parseInt(string[rightCharIndex]) || parseInt(string[rightCharIndex]) == 0) {
      // console.log(string[rightCharIndex]);
      while (parseInt(string[rightCharIndex]) || parseInt(string[rightCharIndex]) == 0) {
        rightNum.push(string[rightCharIndex]);
        rightCharIndex += 1;
      }
    }

    // result = [leftNum.reverse().join(''), rightNum.join('')]

    return [leftNum.reverse().join(''), rightNum.join('')];
  }
}


