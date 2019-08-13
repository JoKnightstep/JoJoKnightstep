(function($) {

    var $carousel = $('.carousel'),
      $carouselWidth = $carousel.outerWidth(true),
      $carouselInner = $('.carousel-inner'),
      $numImgs = $('.carousel figure').length,
  
      //get each figure element width 
      $imgWidth = parseInt($('.carousel-inner figure').css('width')),
      $winSize = $(window).width(),
      paddingLarge = 17,
      paddingSmall = 11.2,
      carouselPos = 0;
  
    //set initial carousel position to 0 (starting point)
    $carouselInner.css('left', carouselPos);
  
    //Scroll button click
    $('.button a').on('click', function(e) {
  
      e.preventDefault();
  
      //if the screen size is less than 600px, show 2 images, otherwise show 3 images
      if ($winSize <= 599) {
        carouselPos += ($imgWidth * 2 + paddingSmall);
      } else {
        carouselPos += ($imgWidth * 3 + paddingLarge);
      }
  
      $carouselInner.css('left', -carouselPos);
  
      //if the position is bigger or = to the entire width of the total images, go back to position 0 
      // that is, to the beginning of the carousel
      if (carouselPos >= parseInt($imgWidth * $numImgs)) {
        carouselPos = 0; // the position goes back to 0 and the panel slides to the beginning of the carousel
        $carouselInner.css('left', carouselPos);
      }
  
    });
  
    //Adjust some values on screen resize
    $(window).resize(function() {
  
      $carouselWidth = $carousel.outerWidth(true);
      $imgWidth = parseInt($('.carousel-inner figure').css('width'));
      $winSize = $(window).width();
  
    });
  
  })(jQuery);