// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getPokedex, setPokedex, encounterPokemon } from '../storage-utils.js';

const test = QUnit.test;

test('encounterPokemon should create a results object if pokemon not previously shown', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    localStorage.removeItem('RESULTS');
    const sampleResult = [{
        id: 3,
        shown: 1,
        preferred: 0
    }];
    
    //Act 
    // Call the function you're testing and set the result to a const
    encounterPokemon(3);

    const results = getPokedex();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(results, sampleResult);
});

test('encounterPokemon should increment results object if pokemon previously shown', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    localStorage.removeItem('RESULTS');
    const sampleResults = [{
        id: 5,
        shown: 1,
        preferred: 0
    }];

    //Act 
    // Call the function you're testing and set the result to a const
    setPokedex(sampleResults);

    encounterPokemon(5);

    const results = getPokedex();

    const expected = [{
        id: 5,
        shown: 2,
        preferred: 0
    }];

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(results, expected);
});
