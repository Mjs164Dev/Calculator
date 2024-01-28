// set mainContainer & buttoContainer variables
mainContainer = document.querySelector('#main-container');
resultsContainer = document.querySelector('#results-container');

// set initial variable values
let displayText = "";
let firstNumber = "";
let operator = "";
let secondNumber = "";
let answer = "";

// Set event listener for button click in main container
mainContainer.addEventListener("click", function(event) { // pass event details to function for reference
    // Check if the clicked element has the 'number-button' class
    if(event.target.classList.contains('number-button')) {   
        // Check to see if an operator has been selected
        if(operator === "") {
            const btnValue = event.target.textContent; // set btnValue to text value of button clicked
            firstNumber += btnValue; // combine numbers together
            resultsContainer.textContent = firstNumber; // display numbers selected
            
            // if decimal was clicked, deactivate it so it can't be selected again
            if (btnValue == ".") {
                document.querySelector('#button-decimal').disabled = true;
            }
        }
        else {
            const btnValue = event.target.textContent; // set btnValue to text value of button
            secondNumber += btnValue; // combine numbers together
            resultsContainer.textContent = secondNumber; // display numbers selected
            
            // if decimal was clicked, deactivate it so it can't be selected again
            if (btnValue == ".") {
                document.querySelector('#button-decimal').disabled = true;
            }
        }
    }
    // check if button selected was an operator button
    else if (event.target.classList.contains('operator-button')) {
        
        // do if firstNumber, operator, and secondNumber don't have value
        if (firstNumber.length != 0 && secondNumber.length != 0 && operator.length != 0) {
            operate(firstNumber,secondNumber,operator); // call operate function
            firstNumber = answer;
            secondNumber = ""; // clear secondNumber value
            const btnValue = event.target.textContent;
            operator = btnValue;
        }
        // do if firstNumber, operator, or secondNumber have value
        else {
            const btnValue = event.target.textContent;
            operator = btnValue;
            displayText = ""; // clear display text
            resultsContainer.textContent = displayText;
        }
        
        // Ensure decimal button is active after operator button is selected
        document.querySelector('#button-decimal').disabled = false;
    }
});

// Use firstNumber, secondNumber, and the operator to calculate the answer
function operate(firstNumber, secondNumber, operator) {

    // check if user is trying to divide by 0
    if (secondNumber == 0 && operator == "/") {
        alert("Can't divide by 0! Start over.");
        clearVariables();
    }
    else {
        switch (operator) {
            case "+":
                answer = Number(firstNumber) + Number(secondNumber);
                break;
            case "-":
                answer = Number(firstNumber) - Number(secondNumber);
                break;
            case "*":
                answer = Number(firstNumber) * Number(secondNumber);
                break;
            case "/":
                answer = Number(firstNumber) / Number(secondNumber);
                break;
        }
        resultsContainer.textContent = answer; // display answer
    }
};

function clearVariables() {
    displayText = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
    answer = "";
    resultsContainer.textContent = displayText;
    document.querySelector('#button-decimal').disabled = false; // Ensure decimal button is active after all variables are cleared
}

// Reset the display text on AC button click
document.querySelector('#button-ac').addEventListener("click", function() {
    clearVariables();
});

document.querySelector('#button-equal').addEventListener("click", function() {
    operate(firstNumber, secondNumber, operator);
    document.querySelector('#button-decimal').disabled = false;
});