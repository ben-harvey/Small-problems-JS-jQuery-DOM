/*
input: a string of capital letters repeated 1 or more times
output: a string rep rle of input
rules:
  for rle
    if character is repeated once
      output has character itself, without a digit
        eg 'A' -> 'A'
    if character is repeated more than once
      output has number of repeats of character, then character itself
        eg 'AA' -> '2A'
  output has no spaces
  no bad input
  empty string returns empty string
data structure:
  array of nested arrays
  eg
  [[12, 'W'], [1, B]]
algorithm:
  split input to chars
  split that array of chars to subarrays of a single repeated character
    set result array
    start at index 0
    set startindex = 0
    if char at next index !== char
    result.push(arrayofchars.slice(startindex, index + 1))
    startindex = index + 1


  map over that array
    return ['countstring'] if length is greater than one
    else return ['string']
  join on empty space
*/


const rle = function (string) {
  const chars = string.split('');
  let count = 1;

  // chars.forEach((char, index) => {
  //   if(char === chars[index + 1]) {
  //     count += 1;
  //   } else {
  //     result.push([char, count]);
  //     count = 1;
  //   }
  // });

  // return result.map(([char, count]) => {
  //   return count > 1 ? String(count) + char : char
  // }).join('')

  return chars.reduce((result, currentChar, index, chars) => {
     if(currentChar === chars[index + 1]) {
      count += 1;
    } else {
      result += (count > 1 ? String(count) + currentChar : currentChar)
      count = 1;
    }
    return result;
    }, '')
}
console.log(rle("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB")); //  "12WB12W3B24WB"
console.log(rle("A")); //  "A"
console.log(rle("ABCD")); //  "ABCD"
console.log(rle("AA")); //  "2A"
console.log(rle("AAB")); //  "2AB"
console.log(rle("AABB")); //  "2A2B"
console.log(rle("")); //  ""