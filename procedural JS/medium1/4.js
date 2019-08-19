/*
input: a string program consisting of pos/neg integers and tokens
output: print to console or nothing if no PRINT commands
rules:
  // n : Place a value, n, in the register. Do not modify the stack.
  // PUSH : Push the register value onto the stack. Leave the value in the register.
  // ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
  // SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
  // MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
  // DIV : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
  // MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
  // POP : Remove the topmost item from the stack and place it in the register.
  // PRINT : Print the register value.

  // Initialize the stack and register to the values [] and 0, respectively.

  No bad programs (no bad tokens, no invalid commands)

  top of stack is last index of array

data structure:
  split string to array to get each token

algorithm:
  set stack to []
  set register to 0
  split input string to an array of strings
  for each token:
    use a switch statement to handle logic

  if a string rep of integer
    set register to integer
  if PUSH
     register to stack
     register stays same
  if ADD
    pop value from stack
    add that value to register
    set register equal to that sum
  if SUB...MOD
    pop value from stack
    perform operation with register and that value
    store result in register
    *** note DIV and MOD should be integer operations
    use Math.floor for division
*/

const minilang = function (program) {
  const stack = [];
  let register = 0;
  const tokens = program.split(' ');

  tokens.forEach((token) => {
    debugger;
    switch (token) {
      case 'PUSH':
        stack.push(register);
        return;
      case 'ADD':
        register = register + stack.pop();
        return;
      case 'SUB':
        register = register - stack.pop();
        return;
      case 'MULT':
        register = register * stack.pop();
        return;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        return;
      case 'MOD':
        register = register % stack.pop();
        return;
      case 'POP':
        register = stack.pop();
        return;
      case 'PRINT':
        console.log(register);
        return;
      default:
        register = +token;
        return;
    }
  })
}

// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // // 5
// // // 3
// // // 8

// minilang('5 PUSH POP PRINT');
// // // 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // // 6

// minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// // // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)
