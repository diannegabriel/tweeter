// ============================ DOM IS READY =============================

$(document).ready(function() {

  // When the user types in the #tweet-text textarea,
  // .counter will count the remaining characters left.
  $(`#tweet-text`).keyup(function() {
    $(`.counter`).css('color', '#545149');
    const remain = 140 - $(this).val().length;
    const $error = $('#error');
    $(`.counter`).text(remain);
   
    // If there's an error present, the error will slide up
    // when .counter is not empty or less than 140 characters.
    if (remain >= 0 && remain < 140) {
      $error.slideUp();
    }
    // .counter will turn red as soon as it hits below 0.
    if (remain < 0) {
      $(`.counter`).css('color', 'red');
    }
  });
});