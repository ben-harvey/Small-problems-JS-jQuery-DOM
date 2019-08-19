/*
input: a string
output: a string
rules:
  all non alphabetic characters are replaced by spaces
  if more than one non alphabetic consecutively
    only one space results
algorithm:
  first pass
    convert all non alpha chars to spaces
  second pass
    remove all duplicate spaces

*/

// function nonAlphaToSpace(string) {
//   return string.replace(/([^A-Za-z])/g, ' ')
// }

// function cleanUp(string) {
//   toSpace = nonAlphaToSpace(string);
//   return toSpace.replace(/( )\1+/g, ' ')
// }

// "if there are one or more non alpha characters replace with a space"
function cleanUp(msg) {
  return msg.replace(/[^a-z]+/ig, ' ');
}


// console.log(nonAlphaToSpace("---what's my +*& line?"));    // " what s my line "
console.log(cleanUp("---what's m99__y +*& line?"));    // " what s my line "

