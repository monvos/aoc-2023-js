const fs = require('fs');

const file = fs.readFileSync("input.txt", "utf8");
const lines = file.split(/\r?\n/);

let result = 0;

lines.forEach((line, lineindex) => {
  const winningNums = [...line.split(':')[1].split('|')[0].matchAll(/\d+/g)];
  const myNums = [...line.split(':')[1].split('|')[1].matchAll(/\d+/g)];
  const winArray = [];
  const myArray = [];
  const matchedNums = [];
  let points = 1;



  for (let i = 0; i < myNums.length; i++) {
    myArray.push(myNums[i][0]);

  }
  for (let i = 0; i < winningNums.length; i++) {
    winArray.push(winningNums[i][0]);

  }

  winArray.map((n) => {
    if (myArray.includes(n)) {
      matchedNums.push(n);
    }
  })

  if (matchedNums.length > 0) {
    for (let i = 0; i < matchedNums.length - 1; i++) {
      points = points * 2;
    }
    // console.log(result);
    result += points
  }
  // console.log(amountOfWinNums);

  // console.log(matchedNums);


});

console.log(result);