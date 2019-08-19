var i = 0;

while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}
// since i is incremented in the else clause, it won't be incremented for values of i
// where the if condition is evaluated, namely when i % 3 === 0.  The program will hang
// on i = 0 , since the if condition will always evaluate to true

// Corrected code:

// var i = 0;

// while (i < 10) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }

//   i += 1;
// }