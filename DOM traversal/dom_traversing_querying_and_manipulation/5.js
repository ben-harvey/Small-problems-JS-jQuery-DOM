/*
input: an integer from 1 to 7
output: all elements of the generation are given the class
  .generation-color
rules:
  a generation equals a level of indentation
  1 - article
  2 - header main footer
 if 0 or greater than 8, return.

data structure:

algorithm:
  set current generation to an array containing body
  as many times as input
    make an array of all the children of current generation
      set a result
      for each element
        get children of that element
        push each child in turn to result
    set current to that array
    increment counter

  if counter is met
    for each element in current generation
      set class on that element to .generation-color`
*/

const colorGeneration = function(generation) {
  let currentGeneration = [document.body];
  let result;

  for(let i = 0; i < generation; i += 1) {
    result = [];
    currentGeneration.forEach(element => {
      const children = [...element.children];
      children.forEach(child => result.push(child));
    });
    currentGeneration = result;
  };
  if (result) { currentGeneration.forEach(element => element.classList.add('generation-color')) }
};