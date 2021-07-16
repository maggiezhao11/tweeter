$(document).ready(function() {
  $(".newTweet").on('click', function() {
   $('.new-tweet').toggle();
   $('#tweet-text').focus();
  });

});
