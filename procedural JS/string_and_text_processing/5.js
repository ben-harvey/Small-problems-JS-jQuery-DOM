/*
input: string
output: string
rules:
  swap cases, leave non alpha unchanges
algorithm:
  split
  map
    if upper, return lower
    return upper
  join
  return
*/

const isUpper = (character) => character.toUpperCase() === character;
const isLower = (character) => character.toLowerCase() === character;

const swapCase = function (string) {
  return string.split('')
  .map((character) => {
    if (isUpper(character)) return character.toLowerCase();
    return character.toUpperCase();
  })
  .join('');

}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
console.log(swapCase('!@#$%^ 123'));      // "tONIGHT ON xyz-tv"
