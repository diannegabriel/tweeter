// This code implements the scroll to top functionality

// ============================ DOM IS READY =============================


$(document).ready(() => {

  // Detects a scroll event
  $(window).scroll(function() {

    // If it scrolls down, the button will show up
    if ($(this).scrollTop() > 100) {
      $('.scroll-up').fadeIn(200);

      // If the page is all the way at the top, the button will hide
    } else {
      $('.scroll-up').hide();
    }
  });

  // When button is clicked, it scrolls all the way to the top
  $('.scroll-up').click(
    function() {
      $('html, body').animate({scrollTop: '0px'}, 700);
    }
  );
});