/*
input: string
output: object
rules:
  input is space separated
  output has keys of word length, values of count
  input has punctuation, punctuation counts towards count
algorithm:
  split input to array
  set result object
  for words in input
    if object has key of word length
      increment value
    else
      create key and set value to one
*/

function wordSizes(string) {
  if (!string) { return {}; };

  var words = string.split(' ');
  var result = {};

  for (var i = 0; i < words.length; i++) {
    var length = words[i].length;
    result[length] = result[length] ? result[length] + 1 : 1;
  }

  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

