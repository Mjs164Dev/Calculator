mainContainer = document.querySelector('#main-container');
resultsContainer = document.querySelector('#results-container');

let displayText = "";
let firstNumber = "";
let operator = "";
let secondNumber = "";
let answer = "";

mainContainer.addEventListener("click", function(event) {
    // Check if the clicked element has the 'num-button' class
    if(event.target.classList.contains('number-button')) {   
        // Check to see if an operator has been selected
        if(operator === "") {
            const btnValue = event.target.textContent;
            firstNumber += btnValue;
            resultsContainer.textContent = firstNumber;
        }
        else {
            const btnValue = event.target.textContent;
            secondNumber += btnValue;
            resultsContainer.textContent = secondNumber;
        }
    }
    else if (event.target.classList.contains('operator-button')) {
        const btnValue = event.target.textContent;
        operator = btnValue;
        displayText = "";
        resultsContainer.textContent = displayText;
    }
});

// Reset the display text on AC button click
document.querySelector('#button-ac').addEventListener("click", function() {
    displayText = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
    resultsContainer.textContent = displayText;
});

document.querySelector('#button-equal').addEventListener("click", function() {

    switch (operator) {
        case "+":
            answer = Number(firstNumber) + Number(secondNumber);
            console.log('addition!');
            break;
        case "-":
            answer = Number(firstNumber) - Number(secondNumber);
            console.log('subtraction!');
            break;
        case "*":
            answer = Number(firstNumber) * Number(secondNumber);
            console.log('multiplication!');
            break;
        case "/":
            answer = Number(firstNumber) / Number(secondNumber);
            console.log('division!');
            break;
    }
    
    resultsContainer.textContent = answer;

});