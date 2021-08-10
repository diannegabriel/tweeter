$(document).ready(function() {
  $(`#tweet-text`).keyup(function() {
    const remain = 140 - $(this).val().length;
    $(`.counter`).text(remain);

    if (remain < 0) {
      $(`.counter`).css('color', 'red');
    } else {
      $(`.counter`).css('color', '#545149');
    }
  });
});