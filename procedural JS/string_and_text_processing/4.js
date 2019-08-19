/*
input: string
output: string
rules:
  capitalize
  if first char isn't
algorithm:
  split
  map
    uppercase first char
  join
*/

const wordCap = function (string) {
  return string.split(' ')
  .map((word) => word[0].toUpperCase() + word.slice(1)).toUpperCase
  .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
console.log(wordCap('this is a "quoted" wORD'));    // 'This Is A "quoted" Word'