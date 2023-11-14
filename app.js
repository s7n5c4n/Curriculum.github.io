$(document).ready(function() {
    const darkModeToggle = $('#darkModeToggle');
    const container = $('.container');

    darkModeToggle.on('click', function() {
        container.toggleClass('dark-mode');

        const isDarkModeEnabled = container.hasClass('dark-mode');
        localStorage.setItem('darkMode', isDarkModeEnabled);
    });
    const isDarkModeSaved = localStorage.getItem('darkMode');
    if (isDarkModeSaved === 'true') {
        container.addClass('dark-mode');
    }
});



