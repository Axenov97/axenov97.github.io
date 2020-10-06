$(document).ready(function(){
	$('.parallax__list>li').addClass('layer');
	$('.parallax__list').parallax();
	
const navOffset = $('.navigation').offset().top;
	$(window).scroll(function(){
		const scrolled = $(this).scrollTop();

		if (scrolled > navOffset ) {
			$('.wrapper').addClass('nav-fixed');
		}
		else if (scrolled < navOffset){
			$('.wrapper').removeClass('nav-fixed');
		}
	})


setTimeout(()=>{

		$('.wrapper').addClass('active');
		$('.header').addClass('active');
		$('.menu').addClass('active');
		$('.parallax__title').addClass('active');
		$('.parallax__ship').addClass('active');
	},300);
});
