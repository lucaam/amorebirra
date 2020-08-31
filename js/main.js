/**
*
*	Sticky navbar on scroll.
*
*/
var navbar = $(".navbar");
var header = $(".hero").height();

$(window).scroll(function() {
	if ($(this).scrollTop() > header) {
		navbar.addClass("is-fixed-top");
	} else {
		navbar.removeClass("is-fixed-top");
	}
}); 