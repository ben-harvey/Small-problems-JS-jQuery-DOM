/*
input: an integer rep dimensions of diamond
output: log to console
rules:
  input always odd integer
  all rows of diamonds have an odd number of stars
  rows start at 1
  rows increase by 2
  until you get to input then
  rows decrease by 2
  until 1

  spaces
  input - 1 / 2

  start at
data structure:
  array -- for reverse

algorithm:
  set result array
  starting at 1, increasing by 2, until === input
    set result string
    add (input - that number) / 2 spaces to string
    add that number of stars to string
    push string to result array

  step through result and log each string
  pop and reverse result
  step through and log each string

*/

// hey oscar! this prints a diamond!!

const diamond = function (dimension, firstCharacter, secondCharacter) { // 3
  const result = [];
  for(let numberOfStars = 1; numberOfStars <= dimension; numberOfStars += 2) { // 3
    let row = '';
    const numberOfSpaces = (dimension - numberOfStars) / 2;
    row += ' '.repeat(numberOfSpaces);
    row += firstCharacter.repeat(numberOfStars);
    result.push(row);
  }

   // result [ %, %%%, %%%%%, %%%%%%%, %%%%%%%%% ]
// [ $, $$$, $$$$$$, $$$$$$$, $$$$$$$$$$]
  result.forEach(row => console.log(row));
  const regex = new RegExp(firstCharacter, "g");
  result.map(row => row.replace(regex, secondCharacter))
        .reverse()
        .slice(1)
        .forEach(row => console.log(row));
}

diamond(10, '%', '$');
// diamond(10, '$');
// logs
// *


// diamond(3);
// // logs
// // *
// //***
// // *


// diamond(9);
// // logs
// //     *  1 star, 8 spaces   4
// //    *** 3 stars, 6 spaces  3
// //   ***** 5 stars + 4 ==    2
// //  *******                  1
// // *********                 0
// //  *******
// //   *****
// //    ***
// //     *
// //*
// //***
// //*****
// //*******
// //*********
// //*******
// //*****
// //***
// //*