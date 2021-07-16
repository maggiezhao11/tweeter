$(document).ready(function() {
  $(".newTweet").on("click", function() {
    $(".new-tweet").toggle();
    $("#tweet-text").focus();
  });
});

$(document).ready(function() {
  $("#back-top").hide();
  $(window).on("scroll", function() {
    let showAfter = 100;
    if ( $(this).scrollTop() > showAfter ) {
      $("#back-top").show();
    } else {
      $("#back-top").hide();
    }
  });
  $("#back-top").on("click", function() {
    $(window).scrollTop();
    console.log("line19")
    $("#tweet-text").focus();
  });
});
