$(document).ready(function(){
	$('.slide').slick({
	   centerMode: true,
  centerPadding: '140px',
  slidesToShow: 3,
  autoplay: false, 
  autoplaySpeed: 3000,
    dots: true,
    arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});