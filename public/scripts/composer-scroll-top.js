$(document).ready(() => {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.scroll-up').fadeIn(200);
      } else {
        $('.scroll-up').hide();
      }
    });
    $('.scroll-up').click(
      function (e) {
          $('html, body').animate({scrollTop: '0px'}, 800);
      }
  );
});