var myBoolean = true;
var myString = 'hello';
var myArray = [];
var myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}
// 'Hello' myBoolean points to true, so the conditional statement is evaluated

if (!myString) {
  console.log('World');
}

// the ! logical not operator returns false if the operand can be converted to true. That's the
// case here, so the conditional is not evaluated.

if (!!myArray) {
  console.log('World');
}
// 'World'
// a double logical not operator works thusly:  the first logical not returns false, since the
// empty Array object is truthy. Then the second logical not operator returns true, since its
// operand (false) is falsy.

if (myOtherString || myArray) {
  console.log('!');
}
// '!'
//  JS first evaluates the left side of the logical OR operator, which evaluates to false
// because an empty string is a falsy value.  Then logical OR checks the right side, which
// evaluates to true.  The conditional statement is evaluated