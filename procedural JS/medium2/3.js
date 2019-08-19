/*
input: three integers rep angles of a triangle
output: a string classifying triangle or invalid
rules:
  Right: One angle is a right angle (exactly 90 degrees).
  Acute: All three angles are less than 90 degrees.
  Obtuse: One angle is greater than 90 degrees
  Invalid: Sum !=  180 or some angles are zero.

  all values are integers
  all inputs are degrees
  always 3 inputs

data structure:
  array: for some, every
  integer: for comparing numbers
algorithm:
  invalid:
    if some === 0  or reduce !== 180
  right:
    array includes 90
  acute:
    every < 90
  obtuse
    some > 90
*/

const invalid = function (sides) {
  return sides.some((side) => side === 0) || sides.reduce((total, side) => total + side) !==  180;
}

const triangle = function (...sides) {
  if (invalid(sides)) { return "invalid"};
  if (sides.includes(90)) { return "right"};
  if (sides.every((side) => side < 90)) { return "acute" };
  if (sides.some((side) => side > 90)) { return "acute" };

}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"