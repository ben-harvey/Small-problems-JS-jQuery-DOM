// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "This is a Test"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "For the good of the people"
// ""  -->  ""
// "do9g la8zy 7the o6ver jumped5 f4ox b3rown 2quick t1he" --> 'the quick brown fox jumped over the lazy dog'
/*
input: a string of words containing numbers
output: a new string, sorted or empty, with numbers removed
rules:
  sort the words in input based on the number embedded
  numbers start at 1 up to 9
  numbers are consecutive
  empty input returns empty string
  number can occur at beginning, middle, or end of word

data structure:
  array: index access, split, join
  number: sort

algorithm:
  split string on spaces to array of words
  1. sort words based on number they contain
       for each word
       find the number character
         use regex match
       use that character for sorting callback
     remove the number character from each word
       map over the sorted array
        return the word with the number removed
          regex delete
     rejoin the word array with spaces


*/

// const EMBEDDED_REGEX = /[1-9]/

// const sortEmbeddedWords = function (embeddedWords) {
//   return embeddedWords.sort((first, second) => {
//     const firstIndex = +first.match(EMBEDDED_REGEX)[0];
//     const secondIndex = +second.match(EMBEDDED_REGEX)[0];
//     return firstIndex - secondIndex;
//   });
// }

// const sortSentence = function (sentence) {
//   const words = sentence.split(' ');
//   const sorted = sortEmbeddedWords(words);

//   return sorted.reduce((finalSentence, word) => {
//     finalSentence += word.replace(EMBEDDED_REGEX, '') + ' ';
//     return finalSentence;
//   }, '')
// }

// console.log(sortSentence("is2 Thi1s T4est 3a"));  //-->  "This is a Test"
// console.log(sortSentence("4of Fo1r pe6ople g3ood th5e the2")); // -->  "For the good of the people"
// console.log(sortSentence("")); //-->  ""
// console.log(sortSentence("do9g la8zy 7the o6ver jumped5 f4ox b3rown 2quick t1he")); //--> 'the quick brown fox jumped over the lazy dog'


 // ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- -----------



// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/*
input: 1. an array of numbers 2. a number rep target
output: an array of two numbers rep indexes of summands
rules:
  only two elements will sum to target
  can't use same number twice
  no repeat numbers
data structure:
  array: for index access
algorithm:
  create a nested array of all possible index combos
    eg for length 4
    [0,1]
    [0,2]
    [0,3]
    [1,2]
    [1,3]
    [2,3]
    for 0 up to length - 2
      for 1 up to length - 1
  select the index combo that adds up to the sum


*/

// const combination = function (length) {
//   const result = [];
//   for(let first = 0; first < length - 1; first += 1) {
//     for(let second = first + 1; second < length; second += 1) {
//       result.push([first, second]);
//     }
//   }
//   return result;
// }


// const summandIndices = function (numbers, target) {
//   return combination(numbers.length).filter(([first, second]) => numbers[first] + numbers[second] === target);
// }
// console.log(summandIndices([2, 7, 11, 15], 9)); // [0, 1]
// console.log(summandIndices([2, 7, 11, 15], 13));// [0, 2]
// console.log(summandIndices([2, 3, 4, 5], 8)); // [1, 3]
// console.log(summandIndices([1, 1, 7], 8)); // [0, 2] ? or [1, 2]



//  // ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- -----------
// ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- -----------



// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// const arrayDiff = function (array1, array2) {
//   return array1.filter(element => !array2.includes(element))
// }

// console.log(arrayDiff([1,2],[1])); // == [2]
// console.log(arrayDiff([1,2,2,2,3],[2]));// == [1,3]
// console.log(arrayDiff([1,2,2,2,3],[2, 3]));// == [1]
// console.log(arrayDiff([1,2,2,2,3],[4]));// == [1,2,2,2,3]
// console.log(arrayDiff([1,2,2,2,3],[3, 4]));// == [1,2,2,2]
// console.log(arrayDiff([],[4]));// == []
// console.log(arrayDiff([4],[]));// == [4]

// const scramble = function (word1, word2) {
//   const checkCharacters = word2.split('');
//   let alteredWord = word1;

//   for (character of checkCharacters) {
//     currentWord = alteredWord;
//     alteredWord = alteredWord.replace(character, '');
//     if (currentWord === alteredWord) { return false ;}
//   }
//   return true;
// }

// console.log(scramble('rkqodlw', 'world')) // ==> True
// console.log(scramble('cedewaraaossoqqyt', 'codewars')) // ==> True
// console.log(scramble('katas', 'steak')) // ==> False

//  // ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- -----------
// ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- -----------

// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


/*
input: an array of ints
output: an int that occurs odd number of times
rules:
  only one int occurs an odd number of times
data structure:
  an object where
    key is int
    value is count
algorithm:
  reduce array to an object
    if key exists, increment value
    else, set value equal to 1
  get array of keys and select the one that has an odd value
*/

// const doTest = function (numbers, result) {
//   const counts = numbers.reduce((object, number) => {
//     object[number] ? object[number] += 1 : object[number] = 1;
//     return object;
//   }, {});
//   const oddNumber = Object.keys(counts).filter(number => counts[number] % 2 === 1);
//   return +oddNumber === result;
// }


// console.log(doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5));
// console.log(doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1));
// console.log(doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5));
// console.log(doTest([10], 10));
// console.log(doTest([1,1,1,1,1,1,10,1,1,1,1], 10));
// console.log(doTest([5,4,3,2,1,5,4,3,2,10,10], 1));

//  // ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- -----------
// ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- -----------

/*
input: an array of strings, n, s e and w
output: a reduced array
rules:
  if two opposite directions are next to each other, they cancel each other out
  eg
  ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
  north and south cancel
  ["SOUTH", "EAST", "WEST", "NORTH", "WEST"].
  east and west cancel
  ["SOUTH", "NORTH", "WEST"].
  south and north cancel
  ["WEST"]
  nothing cancels, so return ["WEST"]

return empty array if all cancel
return same array if none cancel

data structure:
  object
    key is direction
    value is its opposite
algorithm
  loop over the input array
  keep track of if a reduction was made
  if not, return the array
  else
  for each direction
    check if the next direction is its opposite
    if so
      splice the current direction and the next direction out of the array
      start the loop over

  return the array
*/

// const CARDINALS = {
//   "NORTH": "SOUTH",
//   "SOUTH": "NORTH",
//   "EAST": "WEST",
//   "WEST": "EAST",
// }

// const dirReduc = function (directions) {
//   directions = directions.slice();
//   let reduced;

//   while (reduced !== false) {
//     reduced = false;
//     for ([index, direction] of directions.entries()) {
//       if (CARDINALS[direction] === directions[index + 1]) {
//         directions.splice(index, 2);
//         reduced = true;
//         continue;
//       }
//     }
//   }
//   console.log(directions);
// }

/*
input: 1. an array of names 2. an integer rep last cola
output: a string rep last drinker
rules:
  each iteration
    first in line drinks cola
    doubles
    goes to end of line
    eg
    [ed, mary]
    [mary, ed, ed]
    [ed, ed, mary, mary]
    [ed, mary, mary, ed, ed]

data structure:
    array
algorithm:
    for each iteration
    set drinker equal to shifting name off of array
    push drinker onto array twice

    return drinker
*/



const whoIsNext = function (queue, lastCola) {
  let drinker;
  for(let i = 0; i < lastCola; i += 1){
    drinker = queue.shift();
    queue.push(drinker);
    queue.push(drinker);
  }
  return drinker;
}

console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)) //== "Sheldon"
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)) //== "Penny"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) //== "Leonard"



