function toString(number) {
  return String(number);
}

function isPalindromicNumber(number) {
  string = toString(number);
  return string === string.split('').reverse().join('');
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(002200));           // true
console.log(isPalindromicNumber(5));            // true