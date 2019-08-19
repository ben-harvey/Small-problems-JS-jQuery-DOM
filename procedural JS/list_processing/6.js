const substringsAtStart = function (string) {
  return indices(string).map((index) => string.slice(0, index + 1));
}

const indices = function (string) {
  return Array.from(Array(string.length).keys());
}
// algorithm
// for each index
//   slice at that index
//   push return of substrings to result

// const substrings = function (string) {
//   const result = [];
//   indices(string).forEach((index) => {
//     const substring = string.slice(index);
//     result.push(substringsAtStart(substring));
//   });
//   return [].concat(...result);
// }

const a = substringsAtStart;
const x = indices;

const substrings = function (s) {
  return [].concat(...x(s).map( (i) => a(s.slice(i)) ));
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
