/*
input: string
output: object
rules:
  output has 3 properties:
    count of lowercase
    count of uppercase
    count of neithercase

  no match returns 0
algorithm:
  match uppers, lowers, and non with regex
  get length of these arrays and return in object

*/

const letterCaseCount = function (string) {
  const lowercase = string.match(/[a-z]/g) || []
    const uppercase = string.match(/[A-Z]/g) || []
    const neither = string.match(/[^a-z]/gi) || []

  return {
    lowercase: lowercase.length,
    uppercase: uppercase.length,
    neither: neither.length,
  }
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }