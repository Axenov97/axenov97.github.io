window.onload = function () {
	$('.preloader__logo').addClass('active');
};
window.setTimeout(function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 1000); 	
    window.setTimeout(function () {
  $('.ship').addClass('active');    
  },200);
    window.setTimeout(function () {
  $('.plane').addClass('active');    
  },500);
},2500);

$( document ).ready(function() {
	$('.header-burger').click(function(event){
		$('.header-burger, .menu').toggleClass('active');
	});

});