// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getPokedex, setPokedex, encounterPokemon, capturePokemon } from '../storage-utils.js';

const test = QUnit.test;

test('getPokedex should return the parsed RESULTS object from localStorage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const sampleResults = [{
        id: 7,
        shown: 5,
        preferred: 3
    }];
    setPokedex(sampleResults);

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = getPokedex();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expected, sampleResults);

});

test('getPokedex should return an empty object if RESULTS does not exist', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    localStorage.removeItem('RESULTS');

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = getPokedex();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expected, []);
});

test('setPokedex should set localStorage as a stringified object but have it returned as a parsed object via getPokedex', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const sampleResults = [{
        id: 7,
        shown: 5,
        preferred: 3
    }];
    setPokedex(sampleResults);
    // console.log(sampleResults);
    // const aaa = typeof(sampleResults);
    // console.log(aaa);

    //Act 
    // Call the function you're testing and set the result to a const
    const results = getPokedex();
    // console.log(results);
    // const bbb = typeof(results);
    // console.log(bbb);

    const expected = [{
        'id': 7,
        'shown': 5,
        'preferred': 3
    }];

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expected, results);
});

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
        shown: 2,
        preferred: 1
    }];
    setPokedex(sampleResults);

    //Act 
    // Call the function you're testing and set the result to a const
    encounterPokemon(5);

    const results = getPokedex();

    const expected = [{
        id: 5,
        shown: 3,
        preferred: 1
    }];

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(results, expected);
});

test('capturePokemon should increment results object preferred key', (expect) => {
    const sampleResults = [{
        id: 9,
        shown: 7,
        preferred: 4
    }];
    setPokedex(sampleResults);

    capturePokemon(9);

    const results = getPokedex();

    const expected = [{
        id: 9,
        shown: 7,
        preferred: 5
    }];

    expect.deepEqual(results, expected);
});