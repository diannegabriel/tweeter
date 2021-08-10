// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const createTweetElement = (tweetData) => {
  const $tweet = $('<article>').addClass('tweetArticle');
  const html = `
  <div class="user">
    <div class="userAvatar">
      <img src="${tweetData.user.avatars}" class="avatar">
      ${tweetData.user.name}
    </div>
    <div class="handle">
    ${tweetData.user.handle}
    </div>
  </div>
  <div class="tweeted">${tweetData.content.text}</div>
  <footer>
    <div class="date">10 days ago</div>
    <div class="engagement">
      <i class="iconFooter fas fa-flag"></i>
      <i class="iconFooter fas fa-retweet"></i>
      <i class="iconFooter fas fa-heart"></i>
    </div>
  </footer>
  `
  return $tweet.html(html);
}

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
}

// const $tweet = createTweetElement(tweetData);
// console.log($tweet); // to see what it looks like

// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
// console.log($('#tweets-container').append($tweet));
// $(document).ready(function() {
  // const $tweet = $(`<article class="tweet">Hello world</article>`);
// });