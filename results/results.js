
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

    names.push(pokemon.pokemon);
    shown.push(item.shown);
    preferred.push(item.preferred);

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

var abc = document.getElementById('shownChart').getContext('2d');
new Chart(abc, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Times Shown',
            data: shown,
            backgroundColor: [
                'rgba(0, 18, 25, 1)',
                'rgba(238, 155, 0, 1)',
                'rgba(0, 95, 115, 1)',
                'rgba(202, 103, 2, 1)',
                'rgba(10, 147, 150, 1)',
                'rgba(187, 62, 3, 1)',
                'rgba(148, 210, 189, 1)',
                'rgba(174, 32, 18, 1)',
                'rgba(233, 216, 166, 1)',
                'rgba(155, 34, 38, 1)'
            ],
            borderColor: [
                'rgba(238, 155, 0, 1)',
                'rgba(0, 18, 25, 1)',
                'rgba(202, 103, 2, 1)',
                'rgba(0, 95, 115, 1)',
                'rgba(187, 62, 3, 1)',
                'rgba(10, 147, 150, 1)',
                'rgba(174, 32, 18, 1)',
                'rgba(148, 210, 189, 1)',
                'rgba(155, 34, 38, 1)',
                'rgba(233, 216, 166, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var def = document.getElementById('preferredChart').getContext('2d');
new Chart(def, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Times Preferred',
            data: preferred,
            backgroundColor: [
                'rgba(0, 18, 25, 1)',
                'rgba(238, 155, 0, 1)',
                'rgba(0, 95, 115, 1)',
                'rgba(202, 103, 2, 1)',
                'rgba(10, 147, 150, 1)',
                'rgba(187, 62, 3, 1)',
                'rgba(148, 210, 189, 1)',
                'rgba(174, 32, 18, 1)',
                'rgba(233, 216, 166, 1)',
                'rgba(155, 34, 38, 1)'
            ],
            borderColor: [
                'rgba(238, 155, 0, 1)',
                'rgba(0, 18, 25, 1)',
                'rgba(202, 103, 2, 1)',
                'rgba(0, 95, 115, 1)',
                'rgba(187, 62, 3, 1)',
                'rgba(10, 147, 150, 1)',
                'rgba(174, 32, 18, 1)',
                'rgba(148, 210, 189, 1)',
                'rgba(155, 34, 38, 1)',
                'rgba(233, 216, 166, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});