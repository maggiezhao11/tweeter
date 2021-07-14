/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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



const createTweetElement = function(tweetData) {
  const { content, created_at } = tweetData;
  const { name, avatars, handle} = tweetData.user;
  const $oldTweet = $(".tweetsContainer");
  $oldTweet.addClass("tweets");
  const tweets = `<section class="tweetsContainer">
  <article class="tweets">
    <header class="tweets-header">
      <div class="tweets-header-left">
        <img src=${avatars} />
        <span>${name}</span>
      </div>
      <div class="userAccount">
        <span>${handle}</span>
      </div>
    </header>
    <div class="text">
      ${content.text}
    </div>
    <footer>
      <div class="footerDisplay">
        <p>${created_at}</p>
        <div class="icon">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </div>
    </footer>
  </article>
  </section>
  `
  return tweets;
};

$(document).ready(function() {
  const $tweet = createTweetElement(tweetData);
  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('.tweetsContainer').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.  
});


