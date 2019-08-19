// algorithm
// create date object from input string,
// create benchmark for midnight with same day
// subtract benchmark from input and divide by (milliseconds per hour)
// eg 00:01 is 1 minute after midnight, 1439 before midnight
const MILLISECONDSINMINUTE = 60000;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeString) {
  var midnight = new Date('January 1, 2019 00:00');
  var newTime = new Date(`January 1, 2019 ${timeString}`)
  return (newTime.getTime() - midnight.getTime()) / MILLISECONDSINMINUTE;
}
var true;
// function beforeMidnight(timeString) {
//  var midnight = new Date('January 2, 2019 00:00');
//   var newTime = new Date(`January 1, 2019 ${timeString}`)
//   var difference = (midnight.getTime() - newTime.getTime()) / MIL PLISECONDSINMINUTE;
//   return difference % 1440;
// }

// refactor to use return of afterMidnight in beforeMidnight
function beforeMidnight(timeString) {
  var difference = MINUTES_PER_DAY - afterMidnight(timeString);
  return difference % 1440;
}

console.log(afterMidnight('23:59'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686