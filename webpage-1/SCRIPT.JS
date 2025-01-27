// Global variables
let isModalOpen = false;
let isSpinning = false;

// Function with parameters and return value
function calculateRectangleArea(length, width) {
    return length * width;
}

// Function demonstrating scope
function calculateArea() {
    // Local variables
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const resultDiv = document.getElementById('result');

    // Input validation
    if (isNaN(length) || isNaN(width)) {
        displayResult('Please enter valid numbers!', 'error');
        return;
    }

    // Using global function
    const area = calculateRectangleArea(length, width);
    displayResult(`The area is: ${area} square units`);
}

// Function to display results with animation
function displayResult(message, type = 'success') {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
    resultDiv.className = 'result'; // Reset classes

    // Force reflow to reset animation
    void resultDiv.offsetWidth;

    resultDiv.classList.add('show');
    if (type === 'error') {
        resultDiv.style.color = '#dc3545';
    } else {
        resultDiv.style.color = '#28a745';
    }
}

// Function to toggle spinner animation
function toggleSpinner() {
    const spinner = document.querySelector('.spinner');
    isSpinning = !isSpinning;

    if (isSpinning) {
        spinner.classList.add('spinning');
    } else {
        spinner.classList.remove('spinning');
    }
}

// Function to toggle modal with animation
function toggleModal() {
    const modal = document.getElementById('modal');
    isModalOpen = !isModalOpen;

    if (isModalOpen) {
        modal.classList.add('show');
    } else {
        modal.classList.remove('show');
    }
}

// Event Listeners for closing modal when clicking outside
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            toggleModal();
        }
    });
});