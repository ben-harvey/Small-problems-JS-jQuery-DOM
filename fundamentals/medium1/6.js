// function debugIt() {
//   var status = 'debugging';
//   function logger() {
//     console.log(status);
//   }

//   logger();
// }

// debugIt();

// hoisted version

function debugIt() {
  function logger() {
    console.log(status);
  }

  var status;
  status = 'debugging';

  logger();
}

debugIt();

// because the logger function has access to all the variables in its binding, meaning
// all variables that were in scope at the time of the function declaration.  var status
// is scoped at the level of the function debugIt, so function logger, with an inner scope
// relative to debugIt, has access to it