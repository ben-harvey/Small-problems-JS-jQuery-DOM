/*
input: a number
output: a string
rules:
  output describes input in degrees, minutes, symbols

  The whole number is degrees. So 156.742 gives you 156 degrees.
Multiply the remaining decimal by 60.
0.742*60 = 44.52, so the whole number 44 equals minutes.
Multiply the remaining decimal by 60.
0.52*60 = 31.2, so the whole number 31 equals seconds.
Decimal degrees 156.742 converts to 156 degrees, 44 minutes and 31 seconds, or 156° 44' 31".
Be sure to follow math rules of rounding when calculating seconds by hand. If your resulting seconds is something like 31.9 you may round up to 32.

  output is formattted with degree, single quote and double quote
  0 returns 0 00 00
  360 returns 360 00 00 or 0 00 00

algorithm:
  find whole number part of input and store in degrees
  multiply decimal part of input by 60
  find whole number part of that and store in minutes
  mulitply decimal part times 60
  round result and store in seconds
  return string

console.log('\xB0');
*/


function dms(inputDegrees) {
  var degrees = Math.floor(inputDegrees);
  var toMinutes = (inputDegrees % 1) * 60;

  var minutes = String(Math.floor(toMinutes));
  var toSeconds = (toMinutes % 1) * 60;

  var seconds = String(Math.round(toSeconds));

  return `${degrees}\xB0${minutes.padStart(2, '0')}'${seconds.padStart(2, '0')}"`
}


console.log(dms(156.742));        // 156°44'31"
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"