// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

$(document).ready(function() {
  loadTweets();

  $('section.new-tweet').hide();
  $('i.fa-angle-double-down').on('click', () => {
    $('.new-tweet').slideToggle();
    $('.new-tweet textarea').focus();
  });

  $('.new-tweet form').submit(function(event) {
    event.preventDefault();
    const $error = $('#error');
    $error.slideUp();
    if ($('#tweet-text').val() === '') {
      $error.html("<i class='fa fa-exclamation-triangle'></i> Your tweet was empty! Please enter something to tweet!");
      return $error.slideDown();
    }
    if ($('#tweet-text').val().length > 140) {
      $error.html("<i class='fa fa-exclamation-triangle'></i> It's limited to 140 characters, mate! Try again?");
      return $error.slideDown();
    }

    submitTweets($(this).serialize());

  });
});

// This function can be responsible for taking in an array of tweet objects
// and then appending each one to the #tweets-container
const renderTweets = function(tweets) {
  $('#tweets-container').empty();
  // loops through tweets
  for (const tweet of tweets) {
    $('#tweets-container').prepend(createTweetElement(tweet));
  }
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
}

const createTweetElement = (tweet) => {
  const $tweet = $('<article>').addClass('tweetArticle');
  const html = `
  <header>
    <div class="user">
      <img src="${tweet.user.avatars}" class="avatar">
      ${escape(tweet.user.name)}
    </div>
    <div class="handle">
    ${escape(tweet.user.handle)}
    </div>
  </header>
  <div class="tweeted">
  ${escape(tweet.content.text)}
  </div>
  <footer>
    <div class="date">
    ${timeago.format(tweet.created_at)}
    </div>
    <div class="engagement">
      <i class="iconFooter fas fa-flag"></i>
      <i class="iconFooter fas fa-retweet"></i>
      <i class="iconFooter fas fa-heart"></i>
    </div>
  </footer>
  `
  return $tweet.html(html);
}

const loadTweets = () => {
  $.ajax('/tweets', { 
    method: 'GET',
    dataType: 'JSON'
  })
  .then(function (tweets) {
    renderTweets(tweets);
  })
}

const submitTweets = (content) => {
  $.ajax('/tweets', {
    type: 'POST',
    data: content
  })
  .then(function () {
    loadTweets();
    $('#tweet-text').val('');
    $(`.counter`).val(140);
    $('#posted').slideDown();
    $('#posted').html('<i class="fas fa-check-circle"></i> Tweet posted!')
  })
};