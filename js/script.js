$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()){
			$("nav").addClass("nav-backgroud");
		} else {
			$("nav").removeClass("nav-backgroud");
		}
	});
	$('#navbar').bootnavbar({
              //options

              //animation: false

          });
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:100,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});
});