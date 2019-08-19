/*
input: string of numbers, letter and non letter chars
output: an object with keys rep case and values of a string
  output value is a string rep of percentages to two decimal places

rules:
  spaces count as neither
  numbers count as neither
  empty string or none of given type returns '0.00
  no bad input

data structure:
  string input
  split to arrays to step through characters
  object output

algorithm:
  split input to character array
  set count for each type
  for each char
    check against regex for type
    increment counter for type
  set result object
  translate counts to percentages **function**
    divide each count by the total and multiply times 100
    Format counts to 2 decimals and coerce to string
  return result object
*/

// const formatCount = (count, length) => ((count / length) * 100).toFixed(2);

// const letterPercentages = function (string) {
//   const length = string.length;
//   const chars = string.split('');
//   let lower = 0;
//   let upper = 0;
//   let neither = 0;


//   chars.forEach((char) => {
//     if (/[a-z]/.test(char)) { lower += 1 };
//     if (/[A-Z]/.test(char)) { upper += 1 };
//     if (/[^a-zA-Z]/.test(char)) { neither += 1 };
//   })

//   return {
//     lowercase: formatCount(lower, length),
//     uppercase: formatCount(upper, length),
//     neither: formatCount(neither, length),
//   }
// }

// refactor to use string.match to count chars

const countChars = function (regex, string) {
  return (string.match(regex) || []).length;
}

const formatCount = (count, length) => ((count / length) * 100).toFixed(2);


const letterPercentages = function (string) {
  const length = string.length;
  const upper = countChars(/[A-Z]/g, string);
  const lower = countChars(/[a-z]/g, string);
  const neither = countChars(/[^A-Z]/gi, string);

  return {
    lowercase: formatCount(lower, length),
    uppercase: formatCount(upper, length),
    neither: formatCount(neither, length),
  }
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }