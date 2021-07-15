  
import { getPokedex, findById } from '../storage-utils.js';
import allPokemon from '../data/pokemon.js';

const resultsDisplay = document.getElementById('results-display');

const results = getPokedex();
let names = [];
let shown = [];
let preferred = [];

// loop through each result
for (let item of results) {
    // use findById to get pokemon data
    const pokemon = findById(allPokemon, item.id);

    names.push(pokemon.name);
    shown.push(item.shown);
    preferred.push(item.preferred);
    console.log(pokemon);
    
    // display the image and the results
    const pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.url_image;

    const pokemonName = document.createElement('h1');
    pokemonName.textContent = pokemon.pokemon;

    const shownP = document.createElement('p');
    shownP.textContent = `Shown: ${item.shown}`;

    const preferredP = document.createElement('p');
    preferredP.textContent = `Preferred: ${item.preferred}`;

    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');

    resultDiv.appendChild(pokemonImage);
    resultDiv.appendChild(pokemonName);
    resultDiv.appendChild(shownP);
    resultDiv.appendChild(preferredP);

    resultsDisplay.appendChild(resultDiv);
}