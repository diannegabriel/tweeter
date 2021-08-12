// Implements safe html and escapes unsafe characters
const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// ============================ renderTweets =============================

// Takes in an array of tweet objects then prepends each one to #tweets-container
const renderTweets = function(tweets) {
  
  // When renderTweets is called, section #tweets-container clears out
  $('#tweets-container').empty();
  
  // Loops through tweets and the newest tweet created will appear first (prepend)
  for (const tweet of tweets) {
    $('#tweets-container').prepend(createTweetElement(tweet));
  }
};

// ========================= createTweetElement ==========================

// Creates a new tweet when passed an object with tweet information
const createTweetElement = (tweet) => {

  // Creates <article id='tweet-article'>
  const $tweet = $('<article>').addClass('tweet-article');

  // Box model for each tweet
  const archiveHTML = `
  <header>
    <div class="user-information">
      <img src="${tweet.user.avatars}" class="avatar">
      ${escape(tweet.user.name)}
    </div>
    <div class="handle">
    ${escape(tweet.user.handle)}
    </div>
  </header>
  <div class="text">
  ${escape(tweet.content.text)}
  </div>
  <footer>
    <div class="date">
    ${timeago.format(tweet.created_at)}
    </div>
    <div class="engagement">
      <i class="icon-footer fas fa-flag"></i>
      <i class="icon-footer fas fa-retweet"></i>
      <i class="icon-footer fas fa-heart"></i>
    </div>
  </footer>
  `;

  // <article id='tweet-article'> will contain the entirety of html
  return $tweet.html(archiveHTML);
};

const loadTweets = () => {
  $.ajax('/tweets', {
    method: 'GET',
    dataType: 'JSON'
  })
    .then(function(tweets) {
      renderTweets(tweets);
    });
};

const postedTimeout = (id) => {
  setTimeout(function() {
    $(id).slideUp();
  }, 5000);
};

const submitTweets = (content) => {
  $.ajax('/tweets', {
    type: 'POST',
    data: content
  })
    .then(function() {
      loadTweets();
      $('#tweet-text').val('');
      $(`.counter`).val(140);
      $('#posted').slideDown();
      $('#posted').html('<i class="fas fa-check-circle"></i> Tweet posted!');
      postedTimeout('#posted');
    });
};

// Runs when DOM is ready and has read everything
$(document).ready(function() {

  // Loads all the tweets to the page
  loadTweets();

  // $('section.new-tweet').hide();
  // $('i.fa-angle-double-down').on('click', () => {
  //   $('.new-tweet').slideToggle();
  //   $('.new-tweet textarea').focus();
  // });

  $('.new-tweet form').submit(function(event) {
    event.preventDefault();
    const $error = $('#error');
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