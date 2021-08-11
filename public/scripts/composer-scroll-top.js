$(document).ready(() => {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.scroll-up').fadeIn(200);
      } else {
        $('.scroll-up').hide();
      }
    });
});