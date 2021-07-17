$(document).ready(function () {
  $("#trigger").on("click", function () {
    $(".new-tweet").toggle();
    $("#tweet-text").focus();
  });
});

$(document).ready(function () {
  $("#back-top").hide();
  $(window).on("scroll", function () {
    let showAfter = 100; // this line to show if the screen scroll down after 100px;
    if ($(this).scrollTop() > showAfter) {
      $("#back-top").show();
    } else {
      $("#back-top").hide();
    }
  });
  $("#back-top").on("click", function () {
    $(window).scrollTop(0); //bring back screen to xCoords = 0;
    $("#tweet-text").focus();
  });
});
