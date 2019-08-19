function stringToInteger(str) {
  var strToNum = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9
  }

  return str.split('').map((number) => strToNum[number]).join('')
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570