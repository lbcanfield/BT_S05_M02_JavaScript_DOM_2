import './less/index.less'

// Your code goes here!


// load event

window.addEventListener('load', function load(event) {
     console.log(`${event.type} has executed`);

})

// Cut, Copy, or Paste Event

window.addEventListener('cut', (event) => {
     console.log(`a ${event.type} event occurred`);
})
window.addEventListener('copy', (event) => {
     console.log(`a ${event.type} event occurred`);
})
window.addEventListener('paste', (event) => {
     console.log(`a ${event.type} event has occurred`);
})

// Scroll Event
window.addEventListener('scroll', (event) => {
     console.log(`we are ${event.type}ing`);
})

// Double-Click Event
window.addEventListener('dblclick', (event) => {
     console.log(`someone has ${event.type}'ed`);
})