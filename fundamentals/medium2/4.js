function doubler(number, caller) {
  console.log('This function was called by ' + caller + '.');
  return number + number;
}

doubler(5, 'Victor');                   // returns 10
// logs:
// This function was called by Victor.

function makeDoubler(caller) {
  return function(number) {  // returns an anonymous function that takes one parameter
    console.log('This function was called by ' + caller + '.'); // caller from outer scope
    return number + number;                                     // accessible here
  }
}

var doubler = makeDoubler('Victor');
console.log(doubler(5));                             // returns 10
// logs:
// This function was called by Victor.