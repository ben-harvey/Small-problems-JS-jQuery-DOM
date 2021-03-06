function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      var msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += this.morning + ' ' + name;
          break;
        case 'afternoon':
          msg += this.afternoon + ' ' + name;
          break;
        case 'evening':
          msg += this.evening + ' ' + name;
          break;
      }

      console.log(msg);
    },
  };
}

var helloVictor = createGreeter('Victor');
helloVictor.greet('morning');
// "Good Morning Victor"

// FE demonstrates that createGreeter has created a closure
// over the function local variable name, so it's accessible
// when the function is invoked even though it has gone out of
// scope