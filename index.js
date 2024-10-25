let count = 0; // Initialize the counter
let intervalId; // Variable to hold the interval ID
let isCounting = false; // Track whether counting is active

// Select elements
const counterDisplay = document.getElementById("counter");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

// Update the displayed count function
function updateDisplay() {
    counterDisplay.textContent = count; // Update the displayed count
}

// Start increasing the counter
function startIncreasing() {
    if (!isCounting) { // Start only if not already counting
        isCounting = true; // Set counting to active
        intervalId = setInterval(() => {
            count++; // Increment the counter
            updateDisplay(); // Update the displayed count
        }, 1000); // Change 1000 to adjust the speed (1 second)
    } else {
        // Stop counting
        clearInterval(intervalId); // Stop the interval
        isCounting = false; // Set counting to inactive
    }
    }


// Stop increasing the counter
function stopIncreasing() {
    clearInterval(intervalId); // Stop the interval
    isCounting = false; // Set counting to inactive
}

// Decrease counter
decreaseButton.addEventListener("click", function() {
    count--; // Decrement the counter
    updateDisplay(); // Update the displayed count
});

// Reset counter
resetButton.addEventListener("click", function() {
    count = 0; // Reset the counter to zero
    updateDisplay(); // Update the displayed count
    stopIncreasing(); // Stop counting if it was active
});

// Handle click event for the increase button
increaseButton.addEventListener("click", startIncreasing);
decreaseButton.addEventListener("click", startdecreasing);

// Initial display update
updateDisplay(); // Ensure the initial count is displayed
