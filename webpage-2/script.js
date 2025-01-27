// Change background color on button click
const bgToggle = document.getElementById('bgToggle');
bgToggle.addEventListener('click', () => {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === 'lightgoldenrodyellow'
            ? '#f0f8ff'
            : 'lightgoldenrodyellow';
});

// Trigger animation on the box
const animateBox = document.getElementById('animateBox');
const animatedBox = document.getElementById('animatedBox');
animateBox.addEventListener('click', () => {
    animatedBox.classList.remove('box'); // Reset animation
    void animatedBox.offsetWidth; // Trigger reflow
    animatedBox.classList.add('box'); // Restart animation
});

// Calculate the area of a rectangle
const areaForm = document.getElementById('areaForm');
const result = document.getElementById('result');
areaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    if (!isNaN(length) && !isNaN(width)) {
        const area = calculateArea(length, width);
        result.textContent = `Area: ${area} sq units`;
    } else {
        result.textContent = 'Please enter valid numbers!';
    }
});

// Function to calculate area with parameters and return value
function calculateArea(length, width) {
    return length * width;
}
