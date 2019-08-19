document.addEventListener('DOMContentLoaded', function () {
  // container = document.querySelector('#container');

  // document.querySelector('html').addEventListener('click', function(event) {
  //   if (event.target !== container) {container.style = 'display: none'}
  //   console.log(event.target);
  // });

  document.querySelector('html').addEventListener('click', function() {
    document.querySelector('#container').style = 'display: none';
  }, true);

  document.querySelector('#container').addEventListener('click', function(event) {
    document.querySelector('#container').style = 'display: block';
  });
})

/*
If you click on container, the bubbling phase is stopped and container isn't
hidden.
If you click outside container, the event bubbles up to document
To fix it, set the listener on html to trigger on the capture phase, and inside
the handler for container, toggle the display back to inline:block

*/