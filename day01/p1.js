const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream("input.txt");

const rl = readline.createInterface({
  input: fileStream,
});


let result = 0;


rl.on('line', (line) => {
  const numbers = line.replace(/\D/g, "");
  const firstNumber = numbers[0]
  const lastNumber = numbers[numbers.length - 1]
  const number = parseInt(firstNumber + lastNumber);
  result += number;
});

rl.on('close', () => {
  console.log('File has been read completely.');
  console.log(result);


});