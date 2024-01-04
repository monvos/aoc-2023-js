const { Console } = require('console');
const fs = require('fs');

const file = fs.readFileSync("input.txt", "utf8");
const lines = file.split(/\r?\n/);

const times = [parseInt([...lines[0].matchAll(/\d+/g)].map(x => x[0]).reduce((acc, x) => acc + x, ''))];
const distances = [parseInt([...lines[1].matchAll(/\d+/g)].map(x => x[0]).reduce((acc, x) => acc + x, ''))];


let result = 1;


times.map((time, index) => {
  let count = 0;
  // console.log(time);

  for (let i = 0; i < time; i++) {
    // console.log(distances[index]);
    if (((time - i) * i) > distances[index]) {
      count += 1;
    }
  }

  result = result * count;
})

console.log(result);
// console.log(times, distances);