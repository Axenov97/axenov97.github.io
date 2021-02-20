$(document).ready(function(){
	$('.slide').slick({
    centerMode: true,
    centerPadding: '140px',
    slidesToShow: 3,
    autoplay: true, 
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          centerPadding: '260px',
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1340,
        settings: {
          centerPadding: '220px',
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1240,
        settings: {
          centerPadding: '200px',
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 960,
        settings: {
          arrows: false,
          centerPadding: '200px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 840,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      },

      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1
        } 
      }
    ]
  });
});