const mainContainer = document.querySelector('#main-container');
const resultsContainer = document.querySelector('#results-container');
const btnZero = document.querySelector('#button-zero');
const btnOne = document.querySelector('#button-one');
const btnTwo = document.querySelector('#button-two');
const btnThree = document.querySelector('#button-three');
const btnFour = document.querySelector('#button-four');
const btnFive = document.querySelector('#button-five');
const btnSix = document.querySelector('#button-six');
const btnSeven = document.querySelector('#button-seven');
const btnEight = document.querySelector('#button-eight');
const btnNine = document.querySelector('#button-nine');
const btnAdd = document.querySelector('#button-add');
const btnSubtract = document.querySelector('#button-subtract');
const btnMultiply = document.querySelector('#button-multiply');
const btnDivide = document.querySelector('#button-divide');
const btnAC = document.querySelector('#button-ac');
const btnDecimal = document.querySelector('#button-decimal');
const btnEqual = document.querySelector('#button-equal');

let displayText = "";

// Add a common class to all your buttons, e.g., 'calc-button'
mainContainer.addEventListener("click", function(event) {
    // Check if the clicked element has the 'calc-button' class
    if(event.target.classList.contains('number-button')) {
        const value = event.target.textContent; // or get some attribute that holds the value
        displayText += value;
        resultsContainer.textContent = displayText;
    }
});

// Reset the display text on AC button click
document.querySelector('#button-ac').addEventListener("click", function() {
    displayText = '';
    resultsContainer.textContent = displayText;
});