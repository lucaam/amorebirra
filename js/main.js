/**
*
*	Sticky navbar on scroll.
*
*/
var navbar = $(".ba-navbar");
var header = $(".ba-header").height();

$(window).scroll(function() {
	if ($(this).scrollTop() > header) {
		navbar.addClass("sticky-top");
	} else {
		navbar.removeClass("sticky-top");
	}
});