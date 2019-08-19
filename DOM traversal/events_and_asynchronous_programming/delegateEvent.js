/*
input: parent, selector, event type, callback
output: delegates events of event type on selector to parent, triggering callback
rules:
  return true if
    selector is child of parent
    selector is equal to parent

  undefined otherwise

  set listener if
    selector is child of parent

data structure:

algorithm:
  gather all children with pattern parent.querySelectorAll(selector)
  if resulting array has length
    add a listener on parent with event and callback
    return true
  else
    return undefined

  if no descendant elements, still set listener and return true

*/
document.addEventListener('DOMContentLoaded', function () {
  const delegateEvent = (parent, selector, eventType, callback) => {

    const returnValue = parent.addEventListener(eventType, function (event) {
      const descendants = [...parent.querySelectorAll(selector)];
      if (descendants.includes(event.target)) { callback(event) };
    });

    return !returnValue;
  }

  // LS solution

  // function delegateEvent(parentElement, selector, eventType, callback) {
  // if (parentElement && parentElement instanceof Element) {
  //   return !parentElement.addEventListener(eventType, function(event) {
  //     var validTargets = Array.prototype.slice.call(parentElement.querySelectorAll(selector));
  //     if (validTargets.includes(event.target)) {
  //       callback(event);
  //     }
  //   });
  //   }
  // }

  var callback = function(event) {
    alert('Target: ' + event.target.tagName + '\nCurrent Target: ' + event.currentTarget.tagName);
  };

  var element1 = document.querySelector('nav');
  var element2 = document.querySelector('main h1');
  var element3 = document.querySelector('main');

  returnValue = delegateEvent(element1, 'p', 'click', callback);
  console.log(returnValue);
});
