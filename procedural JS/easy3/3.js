var age = +(prompt('What is your age?'));
var retirementAge = +(prompt('At what age would you like to retire? '));
var difference = retirementAge - age;
var currentYear = new Date().getFullYear();
var retirementYear = currentYear + difference

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You only have ${difference} years of work to go!`);