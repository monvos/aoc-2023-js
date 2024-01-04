const fs = require('fs');

const file = fs.readFileSync("input.txt", "utf8");
const lines = file.split(/\r?\n/);


let result = 0;

// console.log(20 * 13 * 6);


lines.map((line) => {
  let red = 0;
  let green = 0;
  let blue = 0;
  const sets = line.split(':')[1].split(';');
  sets.map((set) => {
    const cubes = set.split(',');
    cubes.map((cube) => {
      cube = cube.trim().split(' ');
      const amount = parseInt(cube[0]);
      const color = cube[1];

      switch (color) {
        case 'red':
          if (amount > red) {
            red = amount;
          }
          break;

        case 'green':
          if (amount > green) {
            green = amount;
          }
          break;

        case 'blue':
          if (amount > blue) {
            blue = amount;
          }
          break;

        default:
          break;
      }
    })
  })
  // console.log(`Red: ${red} | Green: ${green} | Blue: ${blue}`);


  const power = red * green * blue;
  // console.log(power);
  result += power;
})

console.log(result);