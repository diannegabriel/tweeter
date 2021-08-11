$(document).ready(function() {
  $(`#tweet-text`).keyup(function() {
    $(`.counter`).css('color', '#545149');
    const remain = 140 - $(this).val().length;
    const $error = $('#error');
    $(`.counter`).text(remain);
    if (remain >= 0 && remain < 140) {
      $error.slideUp();
    } 
    if (remain < 0) {
      $(`.counter`).css('color', 'red');
    }
  });
});