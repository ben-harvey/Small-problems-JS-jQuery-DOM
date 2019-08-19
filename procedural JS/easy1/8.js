/*
algorithm:
  check if year is before 1752
  if yes:
    check if divisible by 4 and return true if so
  else
    call isGregLeapYear
*/

function isLeapYear(year) {
  var leapYear = false;

  if (year < 1752) {
    if (year % 4 === 0)
      leapYear = true;
  } else {
    leapYear = isGregorianLeapYear(year);
  }

  return leapYear;
}

function isGregorianLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }

  if (year % 400 === 0){
    return true;
  }
  return false;
}


console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true