/*
input: a string
output: log to console
rules:
  first and 5th lines have +, string.length + 2 -, +
  second and fourth line have | string.length + 2 ' ', |
  third line has | string  |

algorithm:
  store string.length + 2 in variable
  use String.repeat to build lines 1, 2 and 3
  log in order:
  1
  2
  3
  2
  1
*/

function bannerizer(string) {
  boxSide = string.length + 2;
  var line1 = '+' + '-'.repeat(boxSide) + '+';
  var line2 = '|' + ' '.repeat(boxSide) + '|';
  var line3 =  '| ' + string + ' |';
  var order = [line1, line2, line3, line2, line1]

  order.forEach((line) => console.log(line));
}

bannerizer('teststringteststring')