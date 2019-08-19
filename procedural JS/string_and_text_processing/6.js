/*
input: string
output: string
rules:
  alternate CAPS and lower
  non alphas are unchanged but count in alternation

algorithm:
  split
  map with index
  if index is even, upcase
  if odd, downcase
  join
  return
*/

const staggeredCase = function (string) {
  return string.split('')
  .map((character, index) => {
    if (index % 2 === 0) return character.toUpperCase();
    return character.toLowerCase();
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"