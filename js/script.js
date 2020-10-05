$(document).ready(function(){
	$('.parallax__list>li').addClass('layer');
	$('.parallax__list').parallax();
	$('.wrapper').addClass('active');
	setTimeout()
});

  window.onload = function () {
	setTimeout(()=>{
		document.querySelector('.header').classList.add('active');
		document.querySelector('.menu').classList.add('active');
		document.querySelector('.parallax__title').classList.add('active');
	},300);
  }