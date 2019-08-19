document.addEventListener('DOMContentLoaded', function () {
  const ul = document.querySelector('ul');
  const main = document.querySelector('main');
  const articles = document.querySelectorAll('article');

  function clearHighlight() {
    const highlighted = document.querySelector('.highlight');
    highlighted && highlighted.classList.remove('highlight');
  };

  ul.addEventListener('click', function (event) {
    event.stopPropagation();

    const href = event.target.href.slice(-10);
    const target = document.querySelector(href);
    clearHighlight();
    target.classList.add('highlight');
  });

   document.addEventListener('click', function (event) {
    clearHighlight();
    let articleClicked = false;

    articles.forEach(article => {
      if(article.contains(event.target)) {
        articleClicked = true;
        article.classList.add('highlight') };
    });

    if (!articleClicked) { main.classList.add('highlight') };
  });
});

// LS solution

// function highlight(event) {
//   var element;
//   var id;

//   removeHighlight();


//   // if the event target is an anchor tag, set element to the element with id matching href
//   // else, set element to main
//   if (event.target.tagName === 'A') {
//     id = event.target.href.match('#article-[0-9]+')[0]
//     element = document.querySelector(id);
//   } else {
//     element = document.querySelector('main');
//   }

//   // add highlight to that element
//   element.classList.add('highlight');
// }

// function removeHighlight() {
//   var highlighted = document.querySelector('.highlight');
//   if (highlighted) {
//     highlighted.classList.remove('highlight');
//   }
// }

// var nav = document.querySelector('header ul');
// var main = document.querySelector('main');

// nav.addEventListener('click', highlight);
// // adds listener to ul

// document.addEventListener('click', highlight);
// // adds listener to document

// main.addEventListener("click", function(e) {
//   e.preventDefault();  // prevents
//   var article = e.target;  // sets var article to target
//   if (article.tagName !== 'ARTICLE') { article = article.parentNode; }

//   if (article.tagName === "ARTICLE") {
//     e.stopPropagation();
//     removeHighlight();
//     article.classList.add("highlight");
//   }
// });