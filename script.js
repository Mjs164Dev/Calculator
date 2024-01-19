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