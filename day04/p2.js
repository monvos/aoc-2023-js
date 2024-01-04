const fs = require('fs');

const file = fs.readFileSync("input.txt", "utf8");
const lines = file.split(/\r?\n/);

let result = 0;
let copies = new Array(lines.length).fill(0);
// console.log(copies);


lines.forEach((line, lineindex) => {


  const winningNums = [...line.split(':')[1].split('|')[0].matchAll(/\d+/g)];
  const myNums = [...line.split(':')[1].split('|')[1].matchAll(/\d+/g)];
  const winArray = [];
  const myArray = [];
  const matchedNums = [];



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


  let copyNum = copies.shift() + 1;
  result += copyNum;
  // console.log(copyNum);

  for (let i = 0; i < matchedNums.length; i++) {
    if (matchedNums.length > 0) {
      copies[i] = copies[i] + (1 * copyNum);
    }
  }

  // let cards = copies.shift() * matchedNums.length;
  // copies[0] = 0;

  // 4(5)
  // 2 2 + 2

});
console.log(result);

