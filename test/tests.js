// IMPORT MODULES under test here:
import { add, multiply, subtract, divide, squareroot } from '../calculations.js';

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

test('testing subtract function', (expect) => {
    const expected = 1;

    const actual = subtract(2, 1);

    expect.equal(actual, expected);
});

test('testing multiply function', (expect) =>{
    const expected = 4;
    const actual = multiply(2, 2);
    expect.equal(actual, expected);
});

test('testing dividng function', (expect) =>{
    const expected = 2;
    const actual = divide(4, 2);
    expect.equal(actual, expected);
});

test('testing square root function', (expect) =>{
    const expected = 2;
    const actual = squareroot(4);
    expect.equal(actual, expected);
});
