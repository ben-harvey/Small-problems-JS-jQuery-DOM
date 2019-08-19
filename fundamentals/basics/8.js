// function stringToSignedInteger(str) {
//   var modifier = str[0] === '-' ? -1 : 1;
//   var strToNum = {
//     '0': 0,
//     '1': 1,
//     '2': 2,
//     '3': 3,
//     '4': 4,
//     '5': 5,
//     '6': 6,
//     '7': 7,
//     '8': 8,
//     '9': 9
//   };

//   // on lookup, non-numeric characters return undefined.  undefined characters are
//   // discarded when join is called on the resulting array.
//   joinedNumber = str.split('').map((number) => strToNum[number]).join('');
//   return joinedNumber * modifier
// }

function stringToSignedInteger(str) {
  var modifier = str[0] === '-' ? -1 : 1;
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
  };
  var digits = []
  for(var i = 0; i < str.length; i++) {
    digits.push(strToNum[str[i]]);
  }
  return digits.join('') * modifier
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100

