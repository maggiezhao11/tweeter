/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]






const renderTweets = function(tweets) {
  const $posts = $(".tweetsContainer");
  // loops through tweets
  for (const id in data) {
    const $post = data[id];
    //console.log($post);
    // calls createTweetElement for each tweet
    const $tweet = createTweetElement($post)
    // takes return value and appends it to the tweets container
    $('.tweetsContainer').append($tweet)
  }
};



const createTweetElement = function(Data) {
  const { content, created_at } = Data;
  const { name, avatars, handle} = Data.user;
  const daysAgo = timeago.format(created_at);
  let $tweet = `
<article class="tweets">
  <header class="tweets-header">
    <div class="tweets-header-left">
      <img src="${avatars}" />
      <span>${name}</span>
    </div>
    <div class="userAccount">
      <span>${handle}</span>
    </div>
  </header>
  <div class="text">${content.text}</div>
  <footer>
    <div class="footerDisplay">
      <p>${daysAgo}</p>
      <div class="icon">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </div>
  </footer>
</article>
`;
  return $tweet;
};


$(document).ready(function() {
  renderTweets(data);
  const $postForm = $('#userInput');
  console.log($postForm);
  $postForm.on('submit', function (event) {
    console.log("submitting form:");
  // prevent the default browser behaviour
  event.preventDefault();
  // serialize the form data for submission to the server
  const serializedData = $(this).serialize();
  console.log(serializedData);
  // submit serialized data to the server via a POST request to `/api/posts`
  $.post('/tweets', serializedData)
    .done(function(response) {
      console.log(response);
      //fetchPosts();
      // clear the input fields of the form
      $(this).children('input').val('');
      // $('#title').val('');
      // $('#content').val('');
      // $('#authorId').val('');
    });  
});

});



// $(document).ready(function() {
//   const $tweet = createTweetElement(tweetData);
//   // Test / driver code (temporary)
//   console.log($tweet); // to see what it looks like
//   $('.tweetsContainer').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.  
// });


