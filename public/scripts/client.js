// =============================== escape ================================

// Implements safe html and escapes unsafe characters
// This way, users who submit html or js codes won't destroy the program
const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// ============================ renderTweets =============================

// Takes in an array of tweet objects then prepends each one to #tweets-container
const renderTweets = function(tweets) {
  $('#tweets-container').empty();
  
  // Loops through tweets and the newest tweet created will appear first
  for (const tweet of tweets) {
    $('#tweets-container').prepend(createTweetElement(tweet));
  }
};

// ========================= createTweetElement ==========================

// Creates a new tweet when passed an object with tweet information
const createTweetElement = (tweet) => {

  // Creates <article id='tweet-article'>
  const $tweet = $('<article>').addClass('tweet-article');
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

  // <article id='tweet-article'> will contain the entirety of archiveHTML
  return $tweet.html(archiveHTML);
};

// ======================= ajax GET / renderTweets =======================

// Takes a GET request from /tweets and renders the tweets
const loadTweets = () => {
  $.ajax('/tweets', {
    method: 'GET',
    dataType: 'JSON'
  })
    .then(function(tweets) {
      renderTweets(tweets);
    });
};

// ====================== ajax POST / submitTweets =======================

/*
* Takes a POST request on /tweets when the user submits a new tweet.
* When successful, all tweets will load, textarea clears,
* counter resets to 140, and a post confirmation appears.
*/
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

// =========================== postedTimeout =============================

// Sets a timeout to 5s so the notification slides up when it appears
const postedTimeout = (notification) => {
  setTimeout(function() {
    $(notification).slideUp();
  }, 5000);
};

// ============================ DOM IS READY =============================

$(document).ready(function() {

  // Loads all the tweets on the page
  loadTweets();

  /*
  * Event where the user submits a new tweet.
  * Page won't refresh upon submission and
  * returns a successful event or an error
  */
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