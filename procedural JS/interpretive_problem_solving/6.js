/*
input: an integer rep dimension of star
output: a star
rules:
  width and height of input
  3 upper arms
  one middle row
  3 lower arms
  eg
// *  *  *  outer:0 inner:2 [*  ]*[  *]
//  * * *   outer:1  inner:1
//   ***    outer:2 inner:0
// *******
//   ***
//  * * *
// *  *  *
  build one line

  set limit at floor(dimension / 2)
  from let i = 0 up to limit
    add outer spaces of i
    add star
    add inner spaces of abs(i - limit)
    concatenate resulting array, a star, and reversed array


  build star
    construct array from above
    log each
    log center line
      repeat stars n times
    log reverse each
data structure:
  array
algorithm:

*/

const starLine = function (outerSpaces, limit) {
  const leftHalf = [];
  const innerSpaces = Math.abs(outerSpaces - (limit  - 1));
  let result = '';

  leftHalf.push(' '.repeat(outerSpaces));
  leftHalf.push('*');
  leftHalf.push(' '.repeat(innerSpaces))

  leftHalf.forEach(section => result += section);
  result += '*';
  leftHalf.reverse().forEach(section => result += section);

  return result;
}

const star = function (dimension) {
  const topLines = [];
  const limit = Math.floor(dimension / 2);

  for (let line = 0; line < limit; line += 1) {
    topLines.push(starLine(line, limit))
  };

  topLines.forEach(line => console.log(line));
  console.log('*'.repeat(dimension));
  topLines.reverse().forEach(line => console.log(line));

}


star(7);

// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(99);


// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *