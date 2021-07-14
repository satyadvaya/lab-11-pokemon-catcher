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

export function showPokemon(id) {
    // get results from localstorage
    const resultsString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultsString);
    
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
    localStorage.setItem('RESULTS', JSON.stringify(results));
}