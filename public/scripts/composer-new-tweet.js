$(document).ready(function() {
  $('section.new-tweet').hide();
  $('i.fa-angle-double-down').on('click', () => {
    $('.new-tweet').slideToggle();
    $('.new-tweet textarea').focus();
  });
});