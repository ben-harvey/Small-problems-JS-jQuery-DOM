/*
input: 1. a string 2. an integer rep number to shift by
output: a new, encrypted string
rules:
  each letter is shifted right by key
    eg a, 3 --> d   97 + 3 == 100
    eg A, 3 --> D   65 + 3 == 68
  caps and lowercase are preserved
  non-letters(spaces, punctuation) are preserved and not shifted.
  the shift wraps around the end of the alphabet
    eg y, 5 --> d   121 + 5 = 126 - 26 ==
    eg a, 47 -> v
data structure:
  array -- transformation
algorithm:
  split string to characters
  map over characters
    if lowercase, shift lower
      check with regex
    if uppercase, shift upper
      check with regex
    else, stay the same
  join on '' and return string

  shift lower
    convert to charcode
    add key to charcode
    if result is > 122, subtract 26
    convert to string

  shift upper
    convert to charcode
    add key to charcode
    if charcode is > 90, subtract 26
    convert to string
*/
const LOWER_LIMIT = 122;
const UPPER_LIMIT = 90

const shiftCharacter = function (character, key, limit) {
  const charcode = character.charCodeAt(0);
  const shiftedCode = charcode + key;
  const newCharcode = shiftedCode > limit ? shiftedCode - 26 : shiftedCode;
  return String.fromCharCode(newCharcode)
}

const caesarEncrypt = function (sentence, key) {
  const characters = sentence.split('');

  const shiftedCharacters = characters.map(character => {
    if (character.match(/[a-z]/)) { return shiftCharacter(character, key, LOWER_LIMIT); };
    if (character.match(/[A-Z]/)) { return shiftCharacter(character, key, UPPER_LIMIT); };
    return character;
  });

  return shiftedCharacters.join('');
}

// console.log(shiftCharcode(121, 5, LOWER_LIMIT));
// console.log(shiftCharcode(89, 5, UPPER_LIMIT)); // 68

// // simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

console.log(caesarEncrypt('', 9)); // ''
console.log(caesarEncrypt('#$%^&*', 0)); // '#$%^&*'



// A-Z 65-90
// a-z 97-122