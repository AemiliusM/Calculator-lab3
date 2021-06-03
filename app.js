// import functions
import { add, subtract, multiply, divide } from './calculations.js';
// reference needed DOM elements
const addXInput = document.getElementById('add-x-input');
const addYInput = document.getElementById('add-y-input');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

const subtractXInput = document.getElementById('subtract-x-input');
const subtractYInput = document.getElementById('subtract-y-input');
const subtractButton = document.getElementById('subtract-button');
const subtractResult = document.getElementById('subtract-result');

const multiplyXInput = document.getElementById('multiply-x-input');
const multiplyYInput = document.getElementById('multiply-y-input');
const multiplyButton = document.getElementById('multiply-button');
const multiplyResult = document.getElementById('multiply-result');

const divideXInput = document.getElementById('divide-x-input');
const divideYInput = document.getElementById('divide-y-input');
const divideButton = document.getElementById('divide-button');
const divideResult = document.getElementById('divide-result');

// console.log(addXInput, addYInput, addButton, addResult);

// set event listeners 
addButton.addEventListener('click', () => {
    const x = Number(addXInput.value);
    const y = Number(addYInput.value);

    const sum = add(x, y);
 

    addResult.textContent = sum;
  
});
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
subtractButton.addEventListener('click', () => {
    const x = Number(subtractXInput.value);
    const y = Number(subtractYInput.value);

    const difference = subtract(x, y);

    subtractResult.textContent = difference;

});
multiplyButton.addEventListener('click', () => {
    const x = Number(multiplyXInput.value);
    const y = Number(multiplyYInput.value);

    const product = multiply(x, y);


    multiplyResult.textContent = product;

});
divideButton.addEventListener('click', () => {
    const x = Number(divideXInput.value);
    const y = Number(divideYInput.value);

    const quotient = divide(x, y);


    divideResult.textContent = quotient;

});