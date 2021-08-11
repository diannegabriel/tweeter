$(document).ready(() => {
  if ($(this).scrollTop() === 0) {
    $(window).scroll(function() {
      $('.scroll-up').fadeIn(200);
      $('.scroll-up').show();
      // if ($(window).scrollTop(0)) {
        //   $('.scroll-up').fadeOut(200);
        // }
      });
    } else {
      $('.scroll-up').fadeOut(200);
      $('.scroll-up').hide();

    }
    // $(window).scrollTop(0);
});