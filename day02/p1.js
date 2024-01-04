const fs = require('fs');

const file = fs.readFileSync("input.txt", "utf8");
const lines = file.split(/\r?\n/);

const rules = {
  red: 12,
  green: 13,
  blue: 14
}


let result = 0;

lines.map((line) => {
  let isGamePossible = true;
  const sets = line.split(':')[1].split(';');
  sets.map((set) => {
    const cubes = set.split(',');
    cubes.map((cube) => {
      cube = cube.trim().split(' ');
      const amount = cube[0];
      const color = cube[1];

      switch (color) {
        case 'red':
          if (parseInt(amount) > rules.red) {
            isGamePossible = false;
          }
          break;

        case 'green':
          if (parseInt(amount) > rules.green) {
            isGamePossible = false;
          }
          break;

        case 'blue':
          if (parseInt(amount) > rules.blue) {
            isGamePossible = false;
          }
          break;

        default:
          break;
      }
    })
  })

  if (isGamePossible) {
    const gameID = line.split(':')[0].split(' ')[1];
    result += parseInt(gameID);
  }
})

console.log(result);