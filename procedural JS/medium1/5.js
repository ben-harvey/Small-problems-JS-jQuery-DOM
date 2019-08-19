/*
input: a string that may contain number words
output: a string with number words replaced with string versions of those words
rules:
  only replace number words
  case sensitivity?
  periods
data structure:
  array could use indices
  array of strings to iterate through each word in input
algorithm:
  set array of number words
  split input on spaces
  map over that array
    if number words contain word
      return index of number word
    else
      return word
  join array with spaces
  return

*/

// const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five',
//   'six', 'seven', 'eight', 'nine'];

// const wordToDigit = function (string) {
//   const words = string.split(/\b/);
//   return words.map((word => {
//     if (numberWords.includes(word)) { return numberWords.indexOf(word)};
//     return word;
//   })).join('');

// }

// RegEx solution --------------
// algorithm:
// for each numberword
  // create RegEx
  // replace in string with indexOf numberword

const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five',
  'six', 'seven', 'eight', 'nine'];

const wordToDigit = function (string) {
  numberWords.forEach((numberWord, index) => {
    const regex = new RegExp(`\\b${numberWord}\\b`, "gi");
    string = string.replace(regex, index);
  });
  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('Please call me at five five five five one two three four, everyone! Thanks.'));
// "Please call me at 5 5 5 1 2 3 4, everyone. Thanks."