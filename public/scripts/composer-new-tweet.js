// ============================ DOM IS READY =============================

$(document).ready(function() {
  $('section.new-tweet').hide();

  // When the double down icon is clicked, new-tweet form will appear and
  // the cursor will be focused on it.
  $('i.fa-angle-double-down').on('click', () => {
    $('.new-tweet').slideToggle();
    $('.new-tweet textarea').focus();
  });
});