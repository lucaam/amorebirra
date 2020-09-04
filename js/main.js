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