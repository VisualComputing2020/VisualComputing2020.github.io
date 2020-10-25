$(window).mousemove(function(e) {
    var posX = e.clientX / $(window).width() * 100;
    
    $('.row:nth-child(2n)').css('background-position', posX);
  });