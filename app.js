// import functions and grab DOM elements
import pokemon from './/data/pokemon.js';

const pokemon1Radio = document.getElementById('pokemon1-radio');
const pokemon1Image = document.getElementById('pokemon1-image');

const pokemon2Radio = document.getElementById('pokemon2-radio');
const pokemon2Image = document.getElementById('pokemon2-image');

const pokemon3Radio = document.getElementById('pokemon3-radio');
const pokemon3Image = document.getElementById('pokemon3-image');

const catchButton = document.getElementById('catch-button');

// initialize state
let totalRounds = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

function renderRandomPokemon() {
    totalRounds++;

    let randomNumber1 = Math.floor(Math.random() * pokemon.length);
    let randomNumber2 = Math.floor(Math.random() * pokemon.length);
    let randomNumber3 = Math.floor(Math.random() * pokemon.length);

    while (randomNumber1 === randomNumber2 || randomNumber1 === randomNumber3 || randomNumber2 === randomNumber3) {
        randomNumber2 = Math.floor(Math.random() * pokemon.length);
        randomNumber3 = Math.floor(Math.random() * pokemon.length);
    }

    let pokemon1 = pokemon[randomNumber1];
    let pokemon2 = pokemon[randomNumber2];
    let pokemon3 = pokemon[randomNumber3];

    pokemon1Radio.value = pokemon1.id;
    pokemon1Radio.checked = false;
    pokemon1Image.src = pokemon1.url_image;

    pokemon2Radio.value = pokemon2.id;
    pokemon2Radio.checked = false;
    pokemon2Image.src = pokemon2.url_image;

    pokemon3Radio.value = pokemon3.id;
    pokemon3Radio.checked = false;
    pokemon3Image.src = pokemon3.url_image;
}

renderRandomPokemon();

catchButton.addEventListener('click', () => {
    if (totalRounds < 10) {
        renderRandomPokemon();
    } else {
        window.location.replace('./results');
    }
});