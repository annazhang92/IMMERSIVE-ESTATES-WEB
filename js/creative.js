(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();

    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);


    sr.reveal('.sr-story1', {
        duration: 1500,
        scale: 0.3,
        distance: '0px'
    }, 200);


    sr.reveal('.sr-story2', {
        duration: 1500,
        scale: 0.3,
        distance: '0px'
    }, 200);


    sr.reveal('.sr-story3', {
        duration: 1500,
        scale: 0.3,
        distance: '0px'
    }, 200);


    sr.reveal('.sr-story4', {
        duration: 1500,
        scale: 0.3,
        distance: '0px'
    }, 200);

    sr.reveal('.sr-team1', {
        duration: 1500,
        scale: 0.3,
        distance: '0px'
    }, 200);

    sr.reveal('.sr-team2', {
        duration: 1500,
        scale: 0.3,
        distance: '0px'
    }, 200);

    sr.reveal('.sr-team3', {
        duration: 1500,
        scale: 0.3,
        distance: '0px'
    }, 200);

    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });


    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict
