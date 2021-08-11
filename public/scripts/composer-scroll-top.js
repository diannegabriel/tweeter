$(document).ready(() => {
  // if ($(this).scrollTop() === 0) {
    $(window).scroll(function() {
      // $('.scroll-up').fadeIn(200);
      $('.scroll-up').show();
      // if ($(window).scrollTop(0)) {
        //   $('.scroll-up').fadeOut(200);
        // }
      });
    // }
    // $(window).scrollTop(0);
    $('.scroll-up').click(() => {
      $('.scroll-up').fadeOut(200);
      // $('.scroll-up').hide();
    });
});