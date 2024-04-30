$(document).ready(function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        if (link.href.endsWith(currentPath)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });


    

    // function showPopup() {
    //     $('#popup').fadeIn();
    // }

    // function hidePopup() {
    //     $('#popup').fadeOut();
    // }

    // if ($('.home-tab').hasClass('active')) {
    //     showPopup();
    // }

    // $('.nav-list a').click(function () {
    //     $('.nav-list a').removeClass('active');
    //     $(this).addClass('active');


    //     if ($(this).hasClass('home-tab')) {
    //         showPopup();
    //     } else {
    //         hidePopup();
    //     }
    // });


    // $('#closePopup').click(function () {
    //     hidePopup();
    // });

    // $(document).keydown(function (e) {
    //     if (e.keyCode === 27) {
    //         hidePopup();
    //     }
    // });
});
