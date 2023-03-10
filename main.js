
// arrays for random selection of variables
const planets = ['Mercury', 'Betelgeuse', 'Alpha Centauri A', 'Alpha Centauri B', 'Rupert', 'Death Star'];
const events = ['die with', 'marry', 'cook', 'fight', 'dislocate', 'evaporate'];
const states = ['get rich', 'get mamed', 'get run over', 'get imprisoned', 'fall in love', 'get elected'];
const locations = ['underwater', 'in a prison', 'on top of a mountain', 'in deep space', 'in hyperspace', 'in a local council', 'in parliament', 'in your garden'];

// grabbing inputs from the form
const inputs = new URLSearchParams(window.location.search);
const lifeForm = inputs.get('life-form');
const tentacles = inputs.get('tentacles');
const galaxy = inputs.get('galaxy');
const time = inputs.get('time');

// selecting random variables from arrays
let planetIndex = Math.floor(Math.random() * planets.length);
let planet = planets[planetIndex];

let fateIndex = Math.floor(Math.random() * events.length);
let fate = events[fateIndex];

let stateIndex = Math.floor(Math.random() * states.length);
let state = states[stateIndex];

let locationIndex = Math.floor(Math.random() * locations.length);
let place = locations[locationIndex];


const story = `
<p>Welcome, ${lifeForm} life-form with ${tentacles} tentacles from the ${galaxy} galaxy and ${time} time-dimension. <span class="word" title="id:planet">${planet}</span> is not treating you kindly in the next weeks.</p>
<p>In the near future, you will <span class="word" title="id:event">${fate}</span> your best friend in a terrible chain of events. Entering this new world however, you will immediately <span class="word" title="id:state">${state}</span> and resort to a lonely existence <span class="word" title="id:location">${place}</span>.</p>`;




// populating story page
const storyElement = document.getElementById('story');
storyElement.innerHTML = story;

