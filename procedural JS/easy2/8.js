/*
input: 3 numbers
output:a string
rules:
  numbers between 0 and 100
  no input validation
  90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'

algorithm:
  average inputs
  check for grade with conditionals
  return grade
*/

function getGrade(grade1, grade2, grade3) {
  average = (grade1 + grade2 + grade3) / 3
  if (average >= 90) {
    return 'A'
  } else if (average >= 80) {
    return 'B'
  } else if (average >= 70) {
    return 'C'
  } else if (average >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(80, 80, 80));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(50, 50, 50));    // "F"