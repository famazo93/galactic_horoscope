const planets = ['Mercury', 'Betelgeuse', 'Alpha Centauri A', 'Alpha Centauri B', 'Rupert', 'Death Star'];
const events = ['die with', 'marry', 'cook', 'fight', 'dislocate', 'evaporate'];
const states = ['get rich', 'get mamed', 'get run over', 'get imprisoned', 'fall in love', 'get elected'];
const locations = ['underwater', 'in a prison', 'on top of a mountain', 'in deep space', 'in hyperspace', 'in a local council', 'in parliament', 'in your garden'];

let today = new Date();
today = today.toDateString();

let planetIndex = Math.floor(Math.random() * planets.length);
let planet = planets[planetIndex];
console.log(planet);

let fateIndex = Math.floor(Math.random() * events.length);
let fate = events[fateIndex];
console.log(fate);

let stateIndex = Math.floor(Math.random() * states.length);
let state = states[stateIndex];
console.log(state);

let locationIndex = Math.floor(Math.random() * locations.length);
let place = locations[locationIndex];
console.log(place);


const story = `
<p><span class="word" title="id:planet">${planet}</span> is not treating you kindly in the next weeks.</p>
<p>In the near future, you will <span class="word" title="id:event">${fate}</span> your best friend in a terrible chain of events. Entering this new world however, you will immediately <span class="word" title="id:state">${state}</span> and resort to a lonely existence <span class="word" title="id:location">${place}</span>.</p>`;

const storyElement = document.getElementById('story');
storyElement.innerHTML = story;