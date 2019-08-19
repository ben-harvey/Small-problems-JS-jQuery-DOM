console.log(a);

var a = 1;

// hoisted version

// var a;

// console.log(a);

// a = 1;

//  JS hoists a variable declaration (hoisting means that certain parts of the code are added
// to memory during the compile phase, before execution) Functionally, it is as if the variable declaration
// (but not the variable assignment) comes at the beginning of the code.  So, the program logs undefined
// because a is defined but not yet assigned on line 1