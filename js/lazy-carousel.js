$(document).ready(function(){
	//initializes a lazy loading carousel
	$('.view').slick({
	  lazyLoad: 'ondemand',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  accessibility: true,
	  fade: false,
	  swipeToSlide: true
	  /*autoplay: true,
	  autoplaySpeed: 1000,
	  responsive: [
	  	{
	  		breakpoint: 600,
	  		settings: {
	  			arrows: false
	  		}
	  	}
	  ]*/
	});
});