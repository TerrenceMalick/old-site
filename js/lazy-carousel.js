$(document).ready(function(){
	//initializes a lazy loading carousel
	$('.view').slick({
	  lazyLoad: 'ondemand',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  accessibility: true,
	  fade: true
	});
});