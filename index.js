
// Parallax
if('ontouchstart' in window == false){
  $('body').mousemove(function(e){
    var moveX = (e.pageX * -1 / 30);
    var moveY = (e.pageY * -1 / 30);
    $('.intro').css('background-position', moveX + 'px ' + moveY + 'px');
  });
}


$(window).scroll(function(){    
  var scrollTop = $(window).scrollTop();
  
  $('#button').css({'margin-top' : scrollTop / 1.25 + 200 + 'px'});
  
  $('.welcome').css({'margin-top' : scrollTop / 1.1 + 0 + 'px'});
  
  $('.about').css({'margin-top' : scrollTop / 1.2 + 125 + 'px'});
  
  $('.one').addClass('on'); 
  $('.two').addClass('on'); 
  $('.three').addClass('on'); 
  
  setTimeout(function() {
    $('.one').addClass('on'); 
    setTimeout(function() {
      $('.two').addClass('on'); 
      setTimeout(function() {
        $('.three').addClass('on'); 
      }, 300)
    }, 300)
  }, 300)
});


$(window).scroll(function(){    
  var scrollTop = $(window).scrollTop();

  
  
});