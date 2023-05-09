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

// Key press event
window.addEventListener('keydown', (event) => {
     console.log(`${event.key} has been struck`);
})

// Key release event
window.addEventListener('keyup', (event) => {
     console.log(`${event.key} has been released`);
})

//Window resize event == This may come in handy later
window.addEventListener('resize', (event) => {
     console.log('window has been resized')
})


// DOM Content message
window.addEventListener('DOMContentLoaded', (event) => {
     console.log(`${event.type} has loaded`);
})