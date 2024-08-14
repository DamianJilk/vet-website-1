// Function to update the header text based on window size
function updateHeaderText() {
    const headerElement = document.querySelector('h1');
    if (window.innerWidth > 768) {
        headerElement.innerHTML = 'Happy Paws Veterinary Clinic';
    }
}

// Call the function on page load
window.addEventListener('load', updateHeaderText);

// Call the function on window resize
window.addEventListener('resize', updateHeaderText);
