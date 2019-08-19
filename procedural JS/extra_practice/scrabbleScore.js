/*
input: a string
output: a number rep scrabble score for that word
rules:
  each letter has an associated point score
  to get total score, sum the individual point scores
  return null for input with non alpha characters
  function is case insensitive
  empty string returns null
data structure:
  for input: an array of characters
  for lookup:
    key is score
    value is array of uppercase letters with that score
algorithm:
  guard clause: if string contains non alpha characters, return null
    regex.test on not a-z case insensitive
  upcase string and split to an array of characters
  map that array to an array of numbers using the lookup table
    for each character
      iterate through the keys of lookup
      if the value of the current key includes the search character
        return the key
  reduce that array and return the result
*/

const SCORE_TABLE = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
}

const scrabble = function (word) {
  if(/[^a-z]/gi.test(word)) { return null };

  const possibleScores = Object.keys(SCORE_TABLE);
  const chars = word.toUpperCase().split('');
  const letterScores = chars.map(char => {
    for (let score of possibleScores) {
      if(SCORE_TABLE[score].includes(char)) { return +score}
    }
  });

  return letterScores.reduce((total, current) => {
    return total + current;
  }, 0);
}

console.log(scrabble('a')); //1, ['A'] [1]
console.log(scrabble('f')); //4,
console.log(scrabble('street')); //6, [S T R E E T] [1 1 1 1 1 1]
console.log(scrabble('quirky'));  //22,
console.log(scrabble('OXYPHENBUTAZONE')); //41,
console.log(scrabble('alacrity'));  //13,
console.log(scrabble('alacri,ty!'));  // null
console.log(scrabble('alacri9ty2'));  // null
console.log(scrabble(''));  // 0
