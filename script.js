mainContainer = document.querySelector('#main-container');
resultsContainer = document.querySelector('#results-container');

let displayText = "";
let firstNumber = "";
let operator = "";
let secondNumber = "";

mainContainer.addEventListener("click", function(event) {
    // Check if the clicked element has the 'num-button' class
    if(event.target.classList.contains('number-button')) {   
        // Check to see if an operator has been selected
        if(operator === "") {
            const btnValue = event.target.textContent;
            firstNumber += btnValue;
            displayText = firstNumber;
            resultsContainer.textContent = firstNumber;
        }
        else {
            const btnValue = event.target.textContent;
            secondNumber += btnValue;
            displayText = secondNumber;
            resultsContainer.textContent = secondNumber;
        }
    }
    else if (event.target.classList.contains('operator-button')) {
        const btnValue = event.target.textContent;
        operator = btnValue;
        displayText = "";
        resultsContainer.textContent = displayText;
        console.log(operator);
    }
});

// Reset the display text on AC button click
document.querySelector('#button-ac').addEventListener("click", function() {
    console.log(firstNumber);
    console.log(operator);
    console.log(secondNumber);
    displayText = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
    resultsContainer.textContent = displayText;
});