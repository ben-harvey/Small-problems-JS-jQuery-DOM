const myBind = function (func, context, ...outerArgs) {
  return function (...innerArgs) {
    const allArgs = outerArgs.concat(innerArgs)
    return func.apply(context, allArgs);
  };
};

function addNumbers(a, b) {
  return a + b;
}

var addFive = myBind(addNumbers, null, 5);

console.log(addFive(10))

