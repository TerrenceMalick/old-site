$(document).ready(function(){
	//initializes a lazy loading carousel
	$('.view').slick({
	  lazyLoad: 'ondemand',
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  accessibility: true,
	  centerMode: true
	});
});