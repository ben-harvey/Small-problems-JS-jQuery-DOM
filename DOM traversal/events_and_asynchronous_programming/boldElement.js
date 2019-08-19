/*
input: 1. an element 2. a callback
output: sets font-weight style on 1 to bold, calls callback,  passing in 1
rules:

data structure:

algorithm:

*/
const event = new CustomEvent('bolded');

const makeBold = function (element, event) {
  element.style.fontWeight = 'bold';

  element.dispatchEvent(event);
};


var sectionElement = document.querySelector('section');

sectionElement.addEventListener('bolded', function () {
  alert('bolded!')
  event.target.classList.add('highlight');
})

makeBold(sectionElement);

console.log(sectionElement.classList.contains('highlight'))// true
console.log(sectionElement.style.fontWeight)// "bold"