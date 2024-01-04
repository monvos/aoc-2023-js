const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream("input.txt");

const rl = readline.createInterface({
  input: fileStream,
});

let result = 0;

const checklist = [
  ['one', '1'],
  ['two', '2'],
  ['three', '3'],
  ['four', '4'],
  ['five', '5'],
  ['six', '6'],
  ['seven', '7'],
  ['eight', '8'],
  ['nine', '9'],
]


rl.on('line', (line) => {


  const wordsInLine = []

  checklist.map((word) => {
    let wordPosition = line.indexOf(word[0]);
    let digitPosition = line.indexOf(word[1]);

    while (wordPosition !== -1) {

      wordsInLine.push({ 'num': word[1], 'pos': wordPosition });
      wordPosition = line.indexOf(word[0], wordPosition + 1);
    }

    while (digitPosition !== -1) {

      wordsInLine.push({ 'num': word[1], 'pos': digitPosition });
      digitPosition = line.indexOf(word[1], digitPosition + 1);
    }

  })


  wordsInLine.sort((a, b) => a.pos - b.pos);


  const firstNumber = wordsInLine.slice(0, 1);
  const lastNumber = wordsInLine.slice(wordsInLine.length - 1, wordsInLine.length);
  const number = parseInt(firstNumber[0].num + lastNumber[0].num);
  result += number;

});


rl.on('close', () => {
  console.log('File has been read completely.');
  console.log(result);
});