/*
input: a number
output: a string
rules:
  start with 1
  alternate 1 and 0
  output is input length
  input < 0 ?
algorithm:
  set counter
  if odd
    add a 0 to result
  if even
    add a 1 to result
  return string when length is met
*/

function stringy(length) {
  var counter = 1;
  var result = '';

//   while (counter < length) {
//     if (counter % 2 === 0) {
//       result += '1'
//     } else {
//       result += '0';
//     }

//     counter += 1;
//   }
//   return result;
// }
  while (counter <= length) {
    result += counter % 2
    counter += 1;
  }
  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"