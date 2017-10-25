let para = "Given MLB's refusal to consider expansion, Kirksey, Cullinan, Smith, and Hofheinz joined forces with would-be owners from other cities and announced the formation of a new league to compete with the established National and American Leagues. They called the new league the Continental League. Wanting to protect potential new markets, both existing leagues chose to expand from eight teams to ten. However, plans eventually fell through for the Houston franchise after the Houston Buffaloes owner, Marty Marion, could not come to an agreement with the HSA to sell the team. To make matters worse, the Continental League as a whole folded in August 1960. ";

para += "The Astros were established as the Houston Colt .45s and entered the National League in 1962 with the expansion New York Mets. The current name -- reflecting Houston's role as the control center of the U.S. space program -- was adopted three years later, when they moved into the Astrodome, the world's first domed sports stadium.";

para = "";

const wordsArray = para.split(' ');

// Build key value pairs of words and their counts
const wordCountObj = {};
wordsArray.forEach( word => {
  word = word.toLowerCase();
  word = word.replace(/[\.,\!;:]$/, '');
  // TODO: trim punctuation
  wordCountObj[word] ? wordCountObj[word]++ : wordCountObj[word] = 1;
});

// Convert key value pairs into an array of objects
let wordCountArray = Object.entries(wordCountObj);
//console.log(wordCountArray);
wordCountArray = wordCountArray.sort ( (a, b) =>
  {
    // Each of a, b contains array like ['word', count]

    return a[1] == b[1] ? // if counts are equal..
           (a[0] == b[0] ? // see if we got the same word twice (won't happen in practice)
             0 : // return 0 if so
              (a[0] < b[0] ? -1 : 1)) // if not, sort based on word
               : b[1] - a[1]; // but if counts were not equal, sort by value descending
  });

// Print a table for words with >1 occurrences and a list for the rest
let multiWords = [];
let singleWords = [];
wordCountArray.map(pair => {
  // Each pair is an array like ['word', count]
  let word = pair[0];
  let count = pair[1];

  if (count > 1) {
    word = word.padStart(15, ' ');
    multiWords.push(word + ' | ' + count);
  } else { // count = 1
    singleWords.push(word);
  }
});

if(multiWords.length) {
  console.log("Words with multiple occurrences:");
  console.log(multiWords.join('\n'));
}
if(singleWords.length) {
  console.log("Words occuring once:");
  console.log(singleWords.join(', '));
}




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
