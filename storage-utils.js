function findById(items, id) {
    // loop through the items
    for (const item of items) {
        // if item's id is equal to the id parameter
        if (item.id === id) {
            // return the item
            return item;
        }
    }
}

export function getPokedex() {
    const resultsString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultsString);
    return results;
}

export function setPokedex(resultsArray) {
    localStorage.setItem('RESULTS', JSON.stringify(resultsArray));
}

export function encounterPokemon(id) {
    // get results from localstorage
    const results = getPokedex;
    
    // get the object with id matching input id
    const pokemon = findById(results, id);

    // if there is no matching object
    if (!pokemon) {
        // create one
        const newItem = {
            id: id,
            shown: 1,
            preferred: 0
        };
        results.push(newItem);

    // else update the shown key
    } else {
        pokemon.shown++;
    }

    // rewrite the results to localstorage
    setPokedex(results);
}

export function capturePokemon(id) {
    // get the results from local storage
    const results = getPokedex();

    // find the matching item
    const pokemon = findById(results, id);

    // update the item's preferred key
    pokemon.preferred++;

    // rewrite results to localStorage
    setPokedex(results);
}