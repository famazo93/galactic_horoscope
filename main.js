// animations

// implementing reveal animation upon scrolling
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

// implementing radio button style selection in JS for each section
// life-form section
const option1 = document.getElementsByClassName("select1");

for (let i = 0; i < option1.length; i++) {
    option1[i].addEventListener('click', () => {
        if(option1[i].classList.contains('selected')) {
            option1[i].classList.remove('selected');
        } else {
            for (let j = 0; j < option1.length; j++) {
                if(option1[j].classList.contains('selected')) {
                    option1[j].classList.remove('selected')
                };
            }
            option1[i].classList.add('selected');
        }
    });
}

// tentacles section
const option2 = document.getElementsByClassName("select2");

for (let i = 0; i < option2.length; i++) {
    option2[i].addEventListener('click', () => {
        if(option2[i].classList.contains('selected')) {
            option2[i].classList.remove('selected');
        } else {
            for (let j = 0; j < option2.length; j++) {
                if(option2[j].classList.contains('selected')) {
                    option2[j].classList.remove('selected')
                };
            }
            option2[i].classList.add('selected');
        }
    });
}

// galaxy section
const option3 = document.getElementsByClassName("select3");

for (let i = 0; i < option3.length; i++) {
    option3[i].addEventListener('click', () => {
        if(option3[i].classList.contains('selected')) {
            option3[i].classList.remove('selected');
        } else {
            for (let j = 0; j < option3.length; j++) {
                if(option3[j].classList.contains('selected')) {
                    option3[j].classList.remove('selected')
                };
            }
            option3[i].classList.add('selected');
        }
    });
}

// time section
const option4 = document.getElementsByClassName("select4");

for (let i = 0; i < option4.length; i++) {
    option4[i].addEventListener('click', () => {
        if(option4[i].classList.contains('selected')) {
            option4[i].classList.remove('selected');
        } else {
            for (let j = 0; j < option4.length; j++) {
                if(option4[j].classList.contains('selected')) {
                    option4[j].classList.remove('selected')
                };
            }
            option4[i].classList.add('selected');
        }
    });
}

// gargle blaster section
const option5 = document.getElementsByClassName("select5");

for (let i = 0; i < option5.length; i++) {
    option5[i].addEventListener('click', () => {
        if(option5[i].classList.contains('selected')) {
            option5[i].classList.remove('selected');
        } else {
            for (let j = 0; j < option5.length; j++) {
                if(option5[j].classList.contains('selected')) {
                    option5[j].classList.remove('selected')
                };
            }
            option5[i].classList.add('selected');
        }
    });
};

// grabbing inputs from the form
let selection;
let lifeForm;
let tentacles;
let galaxy;
let time;
let story;

const returnSelection = () => {

    const checkSelection = (options) => {
        let selected;
        for (let i = 0; i < options.length; i++) {
            if(options[i].classList.contains('selected')) {
                selected = options[i].querySelector('p').innerHTML;
            };
        };
        return selected;
    };

    // grabbing selected options
    selection = [checkSelection(option1), checkSelection(option2), checkSelection(option3), checkSelection(option4), checkSelection(option5)];
    lifeForm = selection[0];
    tentacles = selection[1].toLowerCase();
    galaxy = selection[2];
    time = selection[3];

    console.log(selection);
    console.log(lifeForm);

    story = `
    <p>Welcome, ${lifeForm} life-form with ${tentacles} tentacles from the ${galaxy} galaxy and ${time} time-dimension. <span class="word" title="id:planet">${planet}</span> is not treating you kindly in the next weeks.</p>
    <p>In the near future, you will <span class="word" title="id:event">${fate}</span> your best friend in a terrible chain of events. Entering this new world however, you will immediately <span class="word" title="id:state">${state}</span> and resort to a lonely existence <span class="word" title="id:location">${place}</span>.</p>`;
    
    return story;
};


// logic for story forming
// arrays for random selection of variables
const planets = ['Mercury', 'Betelgeuse', 'Alpha Centauri A', 'Alpha Centauri B', 'Rupert', 'Death Star'];
const events = ['die with', 'marry', 'cook', 'fight', 'dislocate', 'evaporate'];
const states = ['get rich', 'get mamed', 'get run over', 'get imprisoned', 'fall in love', 'get elected'];
const locations = ['underwater', 'in a prison', 'on top of a mountain', 'in deep space', 'in hyperspace', 'in a local council', 'in parliament', 'in your garden'];



// selecting random variables from arrays
let planetIndex = Math.floor(Math.random() * planets.length);
let planet = planets[planetIndex];

let fateIndex = Math.floor(Math.random() * events.length);
let fate = events[fateIndex];

let stateIndex = Math.floor(Math.random() * states.length);
let state = states[stateIndex];

let locationIndex = Math.floor(Math.random() * locations.length);
let place = locations[locationIndex];

// populating story page
const populateStory = () => {
    if(document.getElementById('story')) {
        let storyElement = document.getElementById('story');
        storyElement.innerHTML = story;
        storyElement.style.display = 'block';
        
        let form = document.getElementById('form');
        form.style.display = 'none';
    };
};

if (document.getElementById('submit')) {
    let submit = document.getElementById('submit');
    submit.addEventListener('click', returnSelection);
    submit.addEventListener('click', populateStory);
};