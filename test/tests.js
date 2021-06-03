// IMPORT MODULES under test here:
import { add } from '../calculations.js';

const test = QUnit.test;

// name your test by what it is testing
test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    // const actual = true; // use your function here
    const actual = add(2, 3);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
