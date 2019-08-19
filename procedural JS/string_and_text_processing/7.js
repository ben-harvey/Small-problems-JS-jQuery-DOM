/*
input: string
output: string
rules:
  alternate CAPS and lower
  non alphas don't count in alternation

algorithm:
  set alternator variable as mutable object
  start with upper

  split
  map
  if alpha
    swap case
    swap variable
  else
    return character
  join
*/

const swapCase = function (character, alternator) {
  alternator[0] *= -1;

  return alternator[0] < 0 ? character.toUpperCase() : character.toLowerCase()
};


const staggeredCase = function (string) {
  let alternator = [1];

  return string.split('')
  .map((character) => {
    if (/[^a-zA-Z]/.test(character)) return character;
    return swapCase(character, alternator);
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"