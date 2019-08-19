var languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python'];
console.log(languages.length); // 3

languages.length = 4;
console.log(languages); //['JavaScript', 'Ruby', 'Python', empty];
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // ['JavaScript']
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['JavaScript', empty, empty]
console.log(languages.length); // 3

languages.length = 1;
languages[2] = 'Python';
console.log(languages); // ['JavaScript', empty, 'Python']
console.log(languages[1]); // undefined
console.log(languages.length); // 3

// demonstrates that length can be redefined, if longer than current elements, creates
// empty spaces, if shorter than current elements, truncates elements.

var sparseArray = [, , 'a', , 'b'];
console.log(sparseArray);