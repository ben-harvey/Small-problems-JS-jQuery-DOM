function wordSizes(string) {
  if (!string) { return {}; };

  var cleaned = string.replace(/[^a-zA-Z ]/g, '');
  var words = cleaned.split(' ');
  var result = {};

  for (var i = 0; i < words.length; i++) {
    var length = words[i].length;
    result[length] = result[length] ? result[length] + 1 : 1;
  }

  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));