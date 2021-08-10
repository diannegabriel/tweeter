$(document).ready(function() {
  $(`#tweet-text`).keyup(function() {
    $(`.counter`).css('color', '#545149');
    const remain = 140 - $(this).val().length;
    $(`.counter`).text(remain);
    if (remain < 0) {
      $(`.counter`).css('color', 'red');
    }
  });
});