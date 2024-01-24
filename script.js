mainContainer = document.querySelector('#main-container');
resultsContainer = document.querySelector('#results-container');

let displayText = "";
let firstNumber = "";
let operator = "";
let secondNumber = "";
let answer = "";


//if number button is being selected, either firstNumber or secondNumber is being entered
//  firstNumber is being entered if operator == "", else secondNumber is being entered
//if operator button is being selected and answer != "", firstNumber = answer.

mainContainer.addEventListener("click", function(event) {
    // Check if the clicked element has the 'number-button' class
    if(event.target.classList.contains('number-button')) {   
        // Check to see if an operator has been selected
        if(operator === "") {
            const btnValue = event.target.textContent;
            firstNumber += btnValue;
            resultsContainer.textContent = firstNumber;
            console.log("firstNumber: ", firstNumber);
            if (btnValue == ".") {
                document.querySelector('#button-decimal').disabled = true;
            }
        }
        else {
            const btnValue = event.target.textContent;
            secondNumber += btnValue;
            resultsContainer.textContent = secondNumber;
            console.log("secondNumber: ", secondNumber);
            if (btnValue == ".") {
                document.querySelector('#button-decimal').disabled = true;
            }
        }
    }
    else if (event.target.classList.contains('operator-button')) {
        
        if (firstNumber.length != 0 && secondNumber.length != 0 && operator.length != 0) {
            operate(firstNumber,secondNumber,operator);
            console.log(answer);
            firstNumber = answer;
            secondNumber = "";
            const btnValue = event.target.textContent;
            operator = btnValue;
            console.log("operator: ", operator);
        }
        else {
            const btnValue = event.target.textContent;
            operator = btnValue;
            console.log("operator: ", operator);
            displayText = "";
            resultsContainer.textContent = displayText;
        }
        document.querySelector('#button-decimal').disabled = false;
    }
});

// Use firstNumber, secondNumber, and the operator to calculate the answer
function operate(firstNumber, secondNumber, operator) {

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
        resultsContainer.textContent = answer;
    }
};

function clearVariables() {
    displayText = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
    answer = "";
    resultsContainer.textContent = displayText;
    document.querySelector('#button-decimal').disabled = false;
}

// Reset the display text on AC button click
document.querySelector('#button-ac').addEventListener("click", function() {
    clearVariables();
});

document.querySelector('#button-equal').addEventListener("click", function() {
    operate(firstNumber, secondNumber, operator);
    document.querySelector('#button-decimal').disabled = false;
    console.log("answer: ", answer);
    console.log(firstNumber, operator, secondNumber, "=",answer);
});