document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const themeStylesheet = document.getElementById('theme-stylesheet');

    toggleButton.addEventListener('click', function () {
        const currentTheme = themeStylesheet.getAttribute('href');
        console.log('Current Theme:', currentTheme);  // Debugging

        // Toggle between light and dark mode
        if (currentTheme.includes('lightmode.css')) {
            themeStylesheet.setAttribute('href', 'darkmode.css');
            console.log('Switched to Dark Mode');  // Debugging
            switchImagesToDarkMode();
        } else {
            themeStylesheet.setAttribute('href', 'lightmode.css');
            console.log('Switched to Light Mode');  // Debugging
            switchImagesToLightMode();
        }
    });
});

function switchImagesToDarkMode() {
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        let currentSrc = image.getAttribute('src');
        if (!currentSrc.includes('artex/')) {
            currentSrc = currentSrc.replace('img/', 'img/dark/').replace('.png', '_Dark.png');
            image.setAttribute('src', currentSrc);
        }
    });
}

function switchImagesToLightMode() {
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        let currentSrc = image.getAttribute('src');
        if (!currentSrc.includes('artex/')) {
            currentSrc = currentSrc.replace('img/dark/', 'img/').replace('_Dark.png', '.png');
            image.setAttribute('src', currentSrc);
        }
    });
}