// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { showPokemon } from '../storage-utils.js';

const test = QUnit.test;

test('showPokemon should create a results object if pokemon not previously shown', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    localStorage.removeItem('RESULTS');
    const sampleResult = {
        id: 3,
        shown: 1,
        preferred: 0
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    showPokemon(3);

    const resultsString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultsString);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(results[0], sampleResult);
});

test('showPokemon should increment results object if pokemon previously shown', (expect) => {
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
    localStorage.setItem('RESULTS', JSON.stringify(sampleResults));

    showPokemon(5);

    const resultsString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultsString);

    const expected = {
        id: 5,
        shown: 2,
        preferred: 0
    };

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(results[0], expected);
});
