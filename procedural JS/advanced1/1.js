/*
input: a template
output: log to console with word parts replaced with words
rules:
  replace part of speech word with random selection of that part of speech
data structure:
  for template: a string of words and speech parts
  for parts of speech: an object with
    keys = parts of speech as strings
    values = array of strings

algorithm:
  split template to words
  map:
    if object[word]
      return random choice from array
        ** generate random number between 0 and array.length - 1
    else
      return word itself
  join on spaces
  log
*/

const randomElement = function (array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const partsOfSpeech = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
}

const madlibs = function (template) {
  const libbed = template.split(/\b/)
    .map((word) => {
      if (partsOfSpeech[word]) { return randomElement(partsOfSpeech[word]) }
      return word;
    })
    .join('');

    console.log(libbed);
}

const template = 'The adjective brown noun adverb verb the adjective yellow noun, who adverb verb his noun and looks around.';

const template2 = "The noun verb the noun's noun."

madlibs(template2);