// algorithm  for each char in input, push to result string twice

function repeater(string) {
  var result = '';
  for(var i = 0; i < string.length; i +=1) {
    result += (string[i] + string[i])
  }

  return result;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""