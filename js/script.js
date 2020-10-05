$(document).ready(function(){
	$('.parallax__list>li').addClass('layer');
	$('.parallax__list').parallax();
	
	setTimeout()
});

  window.onload = function () {

	setTimeout(()=>{
	$('.wrapper').addClass('active');
		document.querySelector('.header').classList.add('active');
		document.querySelector('.menu').classList.add('active');
		document.querySelector('.parallax__title').classList.add('active');
	},300);
  }