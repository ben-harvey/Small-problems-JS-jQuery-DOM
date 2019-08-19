/*
input: a string
output: a number
rules:
  ascii value is sum of ascii codes of characters in string
algorithm:
  set result = 0
  iterate through chars in input
  add charcode of char to result
  return result
*/

function asciiValue(string) {
  var result = 0;
  var i;

  for (var i = 0; i < string.length; i++) {
    // result += string[i].charCodeAt(0);
    // refactor
    result += string.charCodeAt(i);
  }

  return result;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0