/*
input: a string
output: a string
rules:
  output has all consecutive duplicates collapsed
  empty input returns empty output

algorithm:
  for each char
    check if next char is the same
    if yes:
      advance index
    else
      push char to result
  return result
*/

// function crunch(string) {
//   var result = '';
//   var i;

//   for (i = 0; i < string.length; i += 1) {
//     currentChar = string[i];
//     nextChar = string[i + 1]

//     if (currentChar === nextChar) { continue; }

//     result += currentChar;
//   }

//   return result;
// }

// FE

function crunch(string) {
  return string.replace(/(.)\1+/g, '$1');
  // (.) captures any char
  // \1+ is a backreference to one or more duplicate of the captured char
  // g flag is a global search
  // '$1'
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""