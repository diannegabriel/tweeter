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

// Test / driver code (temporary). Eventually will get this from the server.
const data = 
[
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
]

// console.log(timeago.format(tweetData.created_at));

$(document).ready(function() {
  loadTweets();
  $('.new-tweet form').submit(function(event) {
    event.preventDefault();
    const $error = "";
    if ($('textarea').val() === '') {
      $error = $('.error').text(`There's nothing here! Try again?`);
      // $('.error').slideDown("slow");
    }
    if ($('textarea').val().length > 140) {
      $error = $('.error').text(`It's limited to 140 characters, mate! Try again?`);
      // $error.slideUp("slow");
    }
    // Refreshes the app when tweet is submitted
    submitTweets($(this).serialize());
  });
});

const submitTweets = (content) => {
  $.ajax('/tweets', {
    type: 'POST',
    data: content
  })
  .then(function () {
    loadTweets();
    // $textArea.val('');
    // $('.counter').text('140');
  })
};

// This function can be responsible for taking in an array of tweet objects
// and then appending each one to the #tweets-container
const renderTweets = function(tweets) {
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
  // console.log(html)
  // console.log(timeago.format(tweet.created_at))
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