/**
 *
 *	Sticky navbar on scroll.
 *
var navbar = $(".navbar");
var header = $(".navbar").offset().top;

$(window).scroll(function() {
    if ($(this).scrollTop() > header) {
        navbar.addClass("sticky-top");
    } else {
        navbar.removeClass("sticky-top");
    }
});
 */

/*
 *
 *	Auto scroll to automatically show welcome page 
 *
 */

// show hide subnav depending on scroll direction




var element = document.getElementById("welcome-image")
var isShowingImage = false;
var position = $(window).scrollTop();

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    var elementBound = element.getBoundingClientRect();

    if (elementBound.top === 0) {
        isShowingImage = false;
        console.log("scrollEnabled")
    }
    if (scroll > position) {


        console.log('moving DOWN the page');

    } else {
        //only piece that matters


        if (elementBound.top < 0 && elementBound.top * -1 < elementBound.height && !isShowingImage) {
            if (elementBound.height / 5 < elementBound.top / 4 * -1) {
                isShowingImage = true;
                window.scrollTo(0, 0)
                return;


            }
        }

        // scrolling upwards 
        console.log('moving UP the page');
    }

    position = scroll;
});



/*
 *
 *	Collapse navbar after click
 *
 */
$('.nav-link').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});

/*
 *
 *	Url rewrite when clicking an anchor.
 *
 */
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(() => {
            history.pushState('', document.title, window.location.pathname);
        }, 100);
    });
});