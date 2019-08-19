/*
input: a number
output: an array of strings ending in newlines, which when logged form an x
rules:
  x starts at 1 and increases to input
  the center of x is number itself
  then, the number decreases back to input
  if input is greater than 9, only display ones part of number
  height of x is input - 1
  width of x is (2 * input) - 1
  no bad input
  input always greater than zero

  outer spaces
    starts at 0 and increases by one  (input - 1 times)

  inner spaces
    find width of x
    find start number (width - (2outer + 2))
    decrease by two each time
    until less than zero

  number itself
   starts at 1
   increases by one
   until input - 1

  center line
    special case!
    has input - 1 outer spaces, plus input itself

  bottom of x is equal to top of x reversed

data structure:
  array of strings, ending with newline character

algorithm: ['    1    1   ', ]
  create upper part of x
    set a result array
    build each row
      create 2 arrays
        outer spaces
        inner spaces
      iterate through row numbers, from 0 to input - 2
      set a result string
      use row number as index to access inner, outer spaces in their respective arrays
      push outer spaces, number (equal to (row number + 1) % 10, inner spaces, number, outer spaces onto result string
  create center line
      push input - 1 spaces, input % 10, input -1 spaces onto string
      concat onto result
  reverse upper part of x
      concat onto result

  join array on newline and log
*/

const buildOuterSpaces = function (number) {
  const result = [];
  for(let i = 0; i < number - 1; i += 1) {
    result.push(i);
  }
  return result;
}

const buildInnerSpaces = function (number) {
  const width = (2 * number) - 1;
  const startingSpaces = width - 2;
  const result = [];

  for(let i = startingSpaces; i > 0; i -= 2) {
    result.push(i);
  }

  return result;
}

const buildCenterLine = function (number) {
  const centerSpaces = ' '.repeat(number - 1)
  return [centerSpaces + String(number % 10) + centerSpaces];
}


const pattern = function (number) {
  const outerSpaces = buildOuterSpaces(number);
  const innerSpaces = buildInnerSpaces(number);
  const centerLine = buildCenterLine(number);
  let xPattern = [];

  for(let i = 0; i < number - 1; i += 1) {
    let result = '';
    result += ' '.repeat(outerSpaces[i]);
    result += String((i + 1) % 10);
    result += ' '.repeat(innerSpaces[i]);
    result += String((i + 1) % 10);
    result += ' '.repeat(outerSpaces[i]);

    xPattern.push(result);
  }

  const bottomOfX = xPattern.slice().reverse();
  xPattern = xPattern.concat(centerLine);
  xPattern = xPattern.concat(bottomOfX);

  console.log(xPattern.join('\n'));
  return xPattern;
}


pattern(11);
/*
1       1   0       7
 2     2    1       5
  3   3     2       3
   4 4      3       1
    5
   4 4
  3   3
 2     2
1       1
1                 1
 2               2
  3             3
   4           4
    5         5
     6       6
      7     7
       8   8
        9 9      ..
         0
        9 9
       8   8
      7     7
     6       6
    5         5
   4           4
  3             3
 2               2
1                 1
*/