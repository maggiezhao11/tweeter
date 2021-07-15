/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // use escape function to secure the userInput
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  const loadTweets = () => {
    // make a GET request to `/tweets`
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        renderTweets(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  };


  const renderTweets = function(data) {
    $('.tweetsContainer').empty();
    // loops through tweets
    for (const id in data) {
      const $post = data[id];
      // calls createTweetElement for each tweet
      const $tweet = createTweetElement($post)
      // takes return value and appends it to the tweets container
      $('.tweetsContainer').prepend($tweet)
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
    <div class="text">${escape(content.text)}</div>
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
  loadTweets();
  const $postForm = $('#userInput');
  $postForm.on('submit', function (event) {
  // prevent the default browser behaviour
  event.preventDefault();
  //set up userInput error message
  const $textValue = $("#tweet-text").val();
  if ($textValue === "" ) {
       $("#alert-info").text("Alert: the content is empty!").slideDown(() => {
        setTimeout(() => {
          $("#alert-info").slideUp()
        }, 2000);
       });
       return;
  }
  if ($textValue.length > 140) {
    $("#alert-info").text("Alert: your content is over the maximum characters!").slideDown(() => {
      setTimeout(() => {
        $("#alert-info").slideUp()
      }, 2000);
     });
     return;
  } 

  // serialize the form data for submission to the server
  const serializedData = $(this).serialize();

  // submit serialized data to the server via a POST request to `/api/posts`
  $.post('/tweets', serializedData)
    .then(function(response) {
      loadTweets(response);
      // clear the input fields of the form after user tweets the form
      $('textarea').val('');
    });
  });

});

