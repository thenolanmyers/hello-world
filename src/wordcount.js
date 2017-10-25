const para = "Given MLB's refusal to consider expansion, Kirksey, Cullinan, Smith, and Hofheinz joined forces with would-be owners from other cities and announced the formation of a new league to compete with the established National and American Leagues. They called the new league the Continental League. Wanting to protect potential new markets, both existing leagues chose to expand from eight teams to ten. However, plans eventually fell through for the Houston franchise after the Houston Buffaloes owner, Marty Marion, could not come to an agreement with the HSA to sell the team. To make matters worse, the Continental League as a whole folded in August 1960";

const wordsArray = para.split(' ');

// console.log(words);
const wordCountObj = {};

wordsArray.forEach( word => {
  word = word.toLowerCase();
  wordCountObj[word] ? wordCountObj[word]++ : wordCountObj[word] = 1;
  // if (wordCountObj[word]) {
  //   wordCountObj[word] += 1;
  // }
});

console.log(Object.keys(wordCountObj));
console.log(Object.values(wordCountObj));


// let wordKeys = Object.keys(wordCountObj);
// wordKeys = wordKeys.sort();
//
// let total = 0;
// wordKeys.forEach( word => {
//   console.log(`${word}: ${wordCountObj[word]}`);
// });
//
// let wordVals = Object.values(wordCountObj);
// wordVals.sort( a, b => b - a );
// wordVals.forEach( word => {
//   console.log(`${word}: ${wordCountObj[word]}`);
// });
