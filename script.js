mainContainer = document.querySelector('#main-container');
resultsContainer = document.querySelector('#results-container');

let displayText = "";

mainContainer.addEventListener("click", function(event) {
    // Check if the clicked element has the 'num-button' class
    if(event.target.classList.contains('number-button')) {
        const btnValue = event.target.textContent;
        displayText += btnValue;
        resultsContainer.textContent = displayText;
    }
});

// Reset the display text on AC button click
document.querySelector('#button-ac').addEventListener("click", function() {
    displayText = '';
    resultsContainer.textContent = displayText;
});