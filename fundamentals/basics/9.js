// algorithm: get hundreds, tens ones etc
  //

function integerToString(int) {
  if (int === 0) {
    return '0';
  }
  var numToStr = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9'
  };

  numberArray = numberToArray(int);
  return numberArray.map((number) => numToStr[number]).join('');
}

function numberToArray(number) {
  var digits = [];

  while (number > 0) {
    var currentPlace = number % 10 // Math.floor(number / 10);
    digits.unshift(currentPlace);

    number = Math.floor(number / 10);  //(number - currentPlace) / 10;

  //   if (number < 10) {
  //     digits.unshift(number);
  //   };
  }

  return digits;
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
