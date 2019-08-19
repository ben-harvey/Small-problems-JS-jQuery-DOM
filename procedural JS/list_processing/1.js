const sum = function (number) {
  const digits = String(number).split('').map( (string) => +string );
  return digits.reduce( (sum, digit) => sum + digit);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45