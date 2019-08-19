function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

console.log(calculateBonus(2800, true));               // 1400
console.log(calculateBonus(1000, false));              // 0
console.log(calculateBonus(50000, true));              // 25000

//  the arguments keyword gives access to an Array-like object ( responds to the square
// brackets operator but not built in Array methods like push and pop)
// the boolean value, as the second argument to the function,  is accessed at index 1
// and used as the condition for the ternary operator,