const substringsAtStart = function (string) {
  return indices(string).map((index) => string.slice(0, index + 1));
}

const indices = function (string) {
  return Array.from(Array(string.length).keys());
}

const substrings = function (string) {
  const result = [];
  indices(string).forEach((index) => {
    const substring = string.slice(index);
    result.push(substringsAtStart(substring));
  });
  return [].concat(...result);
}

const isPalindrome = function (string) {
  if (string.length === 1) return false;
  return string.split('').reverse().join('') === string;
}

const palindromes = function (string) {
  return substrings(string).filter(isPalindrome);
}




console.log(palindromes('abcd'));       // []

console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]