// function that adds an event to a tracker object before invoking the callback

// tracker object has
//   list method, returns a copy of an array that stores the events
//   elements method, returns an array of elements that events were called orange
//   clear method, clears the list

// algorithm:
//   the track method
//     takes a function as an argument
//     returns a function that invokes the callback
document.addEventListener('DOMContentLoaded', function () {
  const divRed = document.querySelector('#red')
  const divBlue = document.querySelector('#blue')
  const divOrange = document.querySelector('#orange')
  const divGreen = document.querySelector('#green')

  const tracker = (function () {
    let events = [];
    return {
      list: function () {
        return events.slice();
      },
      add: function (event) {
        events.push(event);
        console.log(event);
      },
      elements: function () {
        return events.map(event => event.target);
      },
      clear: function () {
        events = [];
        return events.length;
      }
    };
  })();


  const track = function (callback) {
    return function (event) {
      tracker.add(event);  
      debugger;
      callback(event);
    }
  };


  //track returns a function that takes an argument event.  that event is passed into the
  // returned function

  divRed.addEventListener('click', track(function(event) {
    document.body.style.background = 'red';
  }));

  divBlue.addEventListener('click', track(function(event) {
    event.stopPropagation();
    document.body.style.background = 'blue';
  }));

  divOrange.addEventListener('click', track(function(event) {
    event.stopPropagation();
    document.body.style.background = 'orange';
  }));

  divGreen.addEventListener('click', track(function(event) {
    event.stopPropagation();
    document.body.style.background = 'green';
  }));

  // console.log(tracker.list().length)
  // // = 4
  // console.log(tracker.elements())
  // // = [div#blue, div#red, div#orange, div#green]
  // console.log(tracker.elements()[0] === document.querySelector('#blue'))
  // // = true
  // console.log(tracker.elements()[3] === document.querySelector('#green'))
  // // = true
  // console.log(tracker.clear())
  // // = 0
  // console.log(tracker.list())
  // // = []
  // tracker.list()[0] = 'abc'
  // console.log(tracker.list().length)
// = 0
});