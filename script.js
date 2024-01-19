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

btnOne.addEventListener("click", function() {
    displayText += 1; //add 1 as the next number to the display
    resultsContainer.textContent = displayText;
});

btnOne.addEventListener("click", function() {
    displayText += 1; //add 1 as the next number to the display
    resultsContainer.textContent = displayText;
});

btnTwo.addEventListener("click", function() {
    displayText += 2; //add 2 as the next number to the display
    resultsContainer.textContent = displayText;
});

btnThree.addEventListener("click", function() {
    displayText += 3; //add 3 as the next number to the display
    resultsContainer.textContent = displayText;});

btnFour.addEventListener("click", function() {
    displayText += 4; //add 4 as the next number to the display
    resultsContainer.textContent = displayText;});

btnFive.addEventListener("click", function() {
    displayText += 5; //add 5 as the next number to the display
    resultsContainer.textContent = displayText;});

btnSix.addEventListener("click", function() {
    displayText += 6; //add 6 as the next number to the display
    resultsContainer.textContent = displayText;});

btnSeven.addEventListener("click", function() {
    displayText += 7; //add 7 as the next number to the display
    resultsContainer.textContent = displayText;});

btnEight.addEventListener("click", function() {
    displayText += 8; //add 8 as the next number to the display
    resultsContainer.textContent = displayText;});

btnNine.addEventListener("click", function() {
    displayText += 9; //add 9 as the next number to the display
    resultsContainer.textContent = displayText;});

btnAC.addEventListener("click", function() {
    resultsContainer.textContent = '';
});