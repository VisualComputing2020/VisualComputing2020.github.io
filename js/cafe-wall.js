$(window).mousemove(function(e) {
    var posX = e.clientX / $(window).width() * 100;
    
    $('.rowll:nth-child(2n)').css('background-position', posX);
  });