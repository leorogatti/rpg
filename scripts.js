$(document).ready(function() {
  $('.slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
    
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
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
    ],
    nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
    prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>'
  });
});

$(document).ready(function() {
  // Verifica se é um dispositivo móvel
  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

  // Configurações padrão do Slick Carousel
  var slickSettings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
    prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>'
  };

  // Verifica se é um dispositivo móvel e ajusta as configurações
  if (isMobileDevice()) {
    slickSettings.centerMode = false;
    slickSettings.slidesToShow = 1;
  }

  // Inicializa o Slick Carousel com as configurações definidas
  $('.slider').slick(slickSettings);
});
