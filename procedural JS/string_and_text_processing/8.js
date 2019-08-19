/*
input: string
output: array
rules:
  if empty input or no input
   return []
  output contains 'word (length)' e.g. 'word 4'
  punctuation counts
algorithm:
  guard clause for empty input
  split
  map
    word length
  return
*/

const wordLengths = function (string) {
  if (!string) return [];
  return string.split(' ')
  .map((word) => `${word} ${word.length}`);
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(false));      // []
console.log(wordLengths());        // []
