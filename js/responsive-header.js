let resizeTimeout;
function updateHeaderText() {
    const headerElement = document.querySelector('h1');
    if (window.innerWidth > 768) {
        headerElement.innerHTML = 'Happy Paws Veterinary Clinic';
    } else {
        headerElement.innerHTML = 'Happy Paws Vet Clinic'; // Default text for smaller screens
    }
}

window.addEventListener('load', updateHeaderText);

window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateHeaderText, 200); // Debounce resize event
});
