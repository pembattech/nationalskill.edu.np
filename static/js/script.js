$(document).ready(function () {
    // Check if there's a theme preference in local storage
    const theme = localStorage.getItem('theme');

    // Apply theme if it exists in local storage
    if (theme) {
        $('body').addClass(theme);
    }

    // Toggle theme on click
    $(".theme-switch").on("click", function () {
        $("body").toggleClass("dark-mode");

        // Save theme preference to local storage
        const currentTheme = $("body").hasClass("dark-mode") ? "dark-mode" : "";
        localStorage.setItem('theme', currentTheme);
    });

    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    console.log(currentPath);
    console.log(typeof currentPath);
    navLinks.forEach(link => {
        console.log(link.getAttribute('href'));
        if (link.getAttribute('href').endsWith(currentPath)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });


    function showPopup() {
        $('#popup').fadeIn();
    }

    function hidePopup() {
        $('#popup').fadeOut();
    }

    navLinks.forEach(link => {
        if (link.getAttribute('href') == '/' || link.getAttribute('href').endsWith(currentPath) == '/' || link.getAttribute('href').endsWith(currentPath)) {
            showPopup();
        }
    });


    $('#closePopup').click(function () {
        hidePopup();
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            hidePopup();
        }
    });

});
