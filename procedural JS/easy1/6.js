/*
input: two strings
output: a string
rules:
  returns shortstring + longstring + shortstring
*/

function shortLongShort(string1, string2) {
  var longer = string1.length > string2.length ? string1 : string2;
  var shorter = string1.length > string2.length ? string2 : string1;
  return shorter + longer + shorter;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"