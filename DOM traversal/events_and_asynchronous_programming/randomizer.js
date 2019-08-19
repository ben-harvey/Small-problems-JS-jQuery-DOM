/*
input: n callbacks
output: call each callback at a random time between 1-(2n) seconds
        log elapsed time each second
rules:
  eg
  3 callbacks
  range = 1-6
data structure:
  setTimeout function for delays
  setInterval for logging seconds
  array for iterating through callbacks
  Math.random for generating random number
algorithm:

  set a random generator for a range of 1-(2n)
  set an interval to log the same range
    set a counter, increment it inside callback
  for each callback in args
    set timeout with (func, randomNum * 1000)
  clearInterval after counter reaches maximum
*/



const generateRandom = (limit) => {
  return Math.floor(Math.random() * limit) + 1
}

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  const length = callbacks.length * 2;
  let count = 1;

  callbacks.forEach(callback => {
    setTimeout(callback, 1000 * generateRandom(length));
  });

  const timer = setInterval(function () {
    console.log(count);
    count += 1;
    if (count > length) {clearInterval(timer)}
  }, 1000);
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6