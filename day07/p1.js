const fs = require('fs');

const file = fs.readFileSync("input_test.txt", "utf8");
const lines = file.split(/\r?\n/);

let result = 0;
let fullList = [];

let fiveOfAKind = [];
let fourOfAKind = [];
let fullHouse = [];
let threeOfAKind = [];
let twoPair = [];
let onePair = [];
let highCard = [];

const cardValues = {
  T: '10',
  J: '11',
  Q: '12',
  K: '13',
  A: '14'
}



// lines.map(x => console.log('1:', x.split(' ')[0], '2:', x.split(' ')[1]));
lines.map((line) => {
  let [cards, bid] = line.split(' ');
  let type = handType(cards);
  let values = cardToValue(cards);
  let newLine = {
    cards: cards,
    bid: bid,
    value: values
  }
  // console.log(newLine);
  switch (type) {
    case '5':
      fiveOfAKind.push(newLine);
      break;
    case '14':
      fourOfAKind.push(newLine);
      break;
    case '23':
      fullHouse.push(newLine);
      break;
    case '113':
      threeOfAKind.push(newLine);
      break;
    case '122':
      twoPair.push(newLine);
      break;
    case '1112':
      onePair.push(newLine);
      break;
    case '11111':
      highCard.push(newLine);
      break;
  }
})


fullList = fullList.concat(highCard.sort(sortFunc), onePair.sort(sortFunc), twoPair.sort(sortFunc), threeOfAKind.sort(sortFunc), fullHouse.sort(sortFunc), fourOfAKind.sort(sortFunc), fiveOfAKind.sort(sortFunc));

fullList.map((hand, i) => {
  // console.log(hand.bid);
  let bid = parseInt(hand.bid)
  bid = bid * (i + 1);
  // console.log(bid);
  result += bid;
})

function sortFunc(a, b) {
  for (let i = 0; i < Math.min(a.value.length, b.value.length); i++) {
    let numA = parseInt(a.value[i]);
    let numB = parseInt(b.value[i]);

    if (numA < numB) {
      return -1;
    } else if (numA > numB) {
      return 1;
    }

  }
}



function cardToValue(cards) {
  let temp = [...cards];
  for (let i = 0; i < temp.length; i++) {
    if (isNaN(parseInt(temp[i]))) {
      temp[i] = cardValues[temp[i]];
    }

  }
  return temp;
}



function handType(cards) {
  let obj = {}
  let array = [];
  for (let i = 0; i < cards.length; i++) {
    obj[cards[i]] = (obj[cards[i]] || 0) + 1;
  }


  for (const key in obj) {
    // str += obj[key];
    array.push(obj[key]);
  }

  // console.log(array.sort().join(''));
  console.log(obj);
  return array.sort().join('');
}

// console.log('five', fiveOfAKind, 'four', fourOfAKind, 'full', fullHouse, 'three', threeOfAKind, 'two', twoPair, 'one', onePair, 'high', highCard);
// console.log(threeOfAKind.sort((a, b) => a.cards.localeCompare(b.cards)));
console.log(fullList);