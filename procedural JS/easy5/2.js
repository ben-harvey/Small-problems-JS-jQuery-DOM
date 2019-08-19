// algorithm  for each char in input, push to result string twice

function doubleConsonants(string) {
  var result = '';
  for(var i = 0; i < string.length; i +=1) {
    var currentChar = string[i];
    var regex = /[b-df-hj-np-tv-z]/gi
    if (regex.test(currentChar)) {
      result += (currentChar + currentChar)
    } else
    result += currentChar;
  }

  return result;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""