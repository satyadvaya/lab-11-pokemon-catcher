// import functions and grab DOM elements
import pokemon from './/data/pokemon.js';
import { encounterPokemon, capturePokemon } from './storage-utils.js';

const pokemon1Radio = document.getElementById('pokemon1-radio');
const pokemon1Image = document.getElementById('pokemon1-image');

const pokemon2Radio = document.getElementById('pokemon2-radio');
const pokemon2Image = document.getElementById('pokemon2-image');

const pokemon3Radio = document.getElementById('pokemon3-radio');
const pokemon3Image = document.getElementById('pokemon3-image');

const catchButton = document.getElementById('catch-button');

// initialize state
let totalRounds = 0;

// when page loads & anytime the user clicks the button
    // randomly pick 3 different pokemon
    // update the "shown" key in results for each pokemon
    // display the pokemon on the page
function renderRandomPokemon() {
    totalRounds++;

    // generate three random indices of pokemon array
    let randomNumber1 = Math.floor(Math.random() * pokemon.length);
    let randomNumber2 = Math.floor(Math.random() * pokemon.length);
    let randomNumber3 = Math.floor(Math.random() * pokemon.length);

    // keep generating random numbers until they don't match
    while (randomNumber1 === randomNumber2 || randomNumber1 === randomNumber3 || randomNumber2 === randomNumber3) {
        randomNumber2 = Math.floor(Math.random() * pokemon.length);
        randomNumber3 = Math.floor(Math.random() * pokemon.length);
    }

    let pokemon1 = pokemon[randomNumber1];
    let pokemon2 = pokemon[randomNumber2];
    let pokemon3 = pokemon[randomNumber3];

    // update the shown key for each pokemon encounterPokemon(<id>)
    encounterPokemon(pokemon1.id);
    encounterPokemon(pokemon2.id);
    encounterPokemon(pokemon3.id);

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
    // get the chosen pokemon id (using the input[type=radio]:checked selector)
    const selectedPokemon = document.querySelector('input[type=radio]:checked');
    const selectedId = Number(selectedPokemon.value);
    capturePokemon(selectedId);

    // update the preferred key on the chosen pokemon capturePokemon(<id>)
        // pokemon.preferred++;

    if (totalRounds < 10) {
        renderRandomPokemon();
    } else {
        window.location.replace('./results');
    }
});