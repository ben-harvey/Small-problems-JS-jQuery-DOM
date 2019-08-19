function makeCounter() {
  var count = 1;

  return function() {
    console.log(count++)
  };
}

var counter = makeCounter();
counter();

// no, as long as counter can be called it maintains a closure
// over count, so it's not GCed