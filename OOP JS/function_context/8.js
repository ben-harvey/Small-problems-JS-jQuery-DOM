const newStack = function () {
  const stack = [];
  return {
    push: function (value) {
      stack.push(value);
    },
    pop: function (value) {
      return stack.pop()
    },
    printStack: function () {
      stack.forEach(value => console.log(value));
    },
  };
};

stack = newStack();
stack.push(1);
stack.push(2);
stack.printStack();
stack.pop()
stack.printStack();