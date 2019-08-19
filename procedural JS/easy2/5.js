/*
input: a number
output: log to console
rules:
  sides of triangle each have input length
  first line has length - 1 spaces and 1 star
  second line has length -2 spaces and 2 stars
  etc

algorithm:
  set currentString
  set counter = 1
  add length - counter spaces and counter stars
  break after counter = length

*/
function triangle(length) {
  for (i = 1; i <= length; i += 1){
      spaces = ' '.repeat(length - i)
      stars = '*'.repeat(i)
      console.log(spaces + stars)
    }
}



triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********