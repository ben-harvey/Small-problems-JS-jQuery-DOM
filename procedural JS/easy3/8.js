/*
input: a string
output: a string
rules:
  swap first and last letter of each word
  input is separated by spaces
  every word has at least one letter
  input has at least one word
  no sneaky spaces, only between word
algorithm:
  split input to array of strings on spaces
  for each word
    new function (swapChars)
    input: string
    output string with first and last swapped
    algorithm:
      set result string
      push:
        last character
        middle characters
          index 1 up to string.length - 2
        first character

        to use splice
          split to array
          splice middle
          reverse array
          splice in
*/

// function swapWord(string) {
//   if (string.length === 1) {
//     return string;
//   }

//   var result = '';
//   var lastChar = string[string.length - 1];
//   var firstChar = string[0];

//   result += lastChar;
//   for(var i = 1; i < string.length - 1; i += 1) {
//     result += string[i];
//   }
//   result += firstChar;
//   return result;
// }

function swapWord(string) {
  var middle = string.slice(1, -1);
  var reversed = string.split('').reverse();
  reversed.splice(1, string.length - 2, middle);
  return reversed.join('');
}

function swap(string) {
  var words = string.split(' ')
  return words.map((word) => swapWord(word)).join(' ');
}

// console.log(swapWord('foxy'));
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

