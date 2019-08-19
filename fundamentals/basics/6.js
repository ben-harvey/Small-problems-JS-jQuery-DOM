// var phrase = prompt('Please enter a phrase: ');
// console.log(`There are ${phrase.length} characters in ${phrase}`);

// FE 1

// var phrase = prompt('Please enter a phrase: ');
// var noSpaces = phrase.replace(/ /, '')
// console.log(`There are ${noSpaces.length} characters in ${noSpaces}`);

// FE 2

// var phrase = prompt('Please enter a phrase: ');
phrase = 'the 789 hat'
var onlyAlph = phrase.replace(/[^a-zA-Z]/g, '')
console.log(`There are ${onlyAlph.length} characters in ${onlyAlph}`);
