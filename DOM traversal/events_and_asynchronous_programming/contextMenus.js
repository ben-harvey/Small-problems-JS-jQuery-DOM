document.addEventListener('DOMContentLoaded', function () {
  const main = document.querySelector('main');
  const section = document.querySelector('section');

  main.addEventListener('contextmenu', function (element) {
    event.preventDefault();
    alert('main');
  });

  sub.addEventListener('contextmenu', function (element) {
    event.preventDefault();
    event.stopPropagation();
    alert('sub');
  });
});