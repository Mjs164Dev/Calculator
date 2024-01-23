mainContainer = document.querySelector('#main-container');
resultsContainer = document.querySelector('#results-container');

let displayText = "";
let firstNumber = "";
let operator = "";
let secondNumber = "";
let answer = "";

//Check values of firstNumber (F), operator (O), and secondNumber (S)
//if all are blank -> entering firstNumber
//if F has value -> still entering first number
//if F & O have value, entering second number
//if all have value, call compute function and set answer to first number, then reset O & S values


mainContainer.addEventListener("click", function(event) {
    // Check if the clicked element has the 'number-button' class
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


// Use firstNumber, secondNumber, and the operator to calculate the answer
function operate(firstNumber, secondNumber, operator) {
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
    resultsContainer.textContent = answer;
};


// Reset the display text on AC button click
document.querySelector('#button-ac').addEventListener("click", function() {
    displayText = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
    resultsContainer.textContent = displayText;
});

document.querySelector('#button-equal').addEventListener("click", function() {
    console.log(firstNumber);
    console.log(operator);
    console.log(secondNumber);
    operate(firstNumber, secondNumber, operator);
    console.log(answer);
    firstNumber = answer;
    operator = "";
    secondNumber = "";
});