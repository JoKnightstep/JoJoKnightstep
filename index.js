const { watchViewport } = tornis;
$text2 = ('.panel2 h1');
$text1 = ('.panel1 h1');
$inner1 = ('.panel1 .inner');
$inner2 = ('.panel2 .inner');
$filter1 = $("#wave1 #displacement");
$filter2 = $("#wave2 #displacement");
$distance = $('.panel2 h1').offset().top,
$window = $(window);
$elHeight = ($('.panel2 h1').height() * 2);



const updateValues = ({ scroll }) => {

  if (scroll.changed) {
    $scaleOffset = (scroll.top / 3);
    $scaleOffset2 = (($scaleOffset/100) + 1);
    $scaleOffset3 = (((window.innerHeight + 0) - scroll.top) / 3);
    $scaleOffset4 = (($scaleOffset3/100) + 1);
    TweenMax.to($filter1, 0, { ease: Expo.easeOut, attr: { scale: $scaleOffset } });
    TweenMax.to($inner1, 0, { ease: Elastic.easeOut.config(1, 0.3), css: { transform: "scale("+$scaleOffset2+") translateY(" + ($scaleOffset * -0.75) + "px)" } })
    TweenMax.to($text1, 0, { ease: Elastic.easeOut.config(1, 0.3), css: { transform: "translateX(" + ($scaleOffset / -2) + "px) translateY(" + ($scaleOffset * 0.75) + "px) scaleY("+$scaleOffset2+")" } });
    if ( $window.scrollTop() < ($distance - ((window.innerHeight/2) - $elHeight)) ) {
      TweenMax.to($filter2, 0, { ease: Expo.easeOut, attr: { scale: $scaleOffset3 } });
      TweenMax.to($inner2, 0, { ease: Elastic.easeOut.config(1, 0.3), css: { transform: "scale("+$scaleOffset4+") translateY(" + ($scaleOffset3 * 0.75) + "px)" } })
      TweenMax.to($text2, 0, { ease: Elastic.easeOut.config(1, 0.3), css: { transform: "translateX(" + ($scaleOffset3 / -2) + "px) translateY(" + ($scaleOffset3 * 0.75) + "px) scaleY("+$scaleOffset4+")" } });
    }else{
      TweenMax.to($filter2, 2, { ease: Elastic.easeOut.config(1, 0.3), attr: { scale: 0 } });
      TweenMax.to($text2, 2, { ease: Elastic.easeOut.config(1, 0.3), css: { transform: "translateX(0) translateY(0) scaleY(1)" } });
    }
  }
};

watchViewport(updateValues);