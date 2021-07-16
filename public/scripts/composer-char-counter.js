$(document).ready(function() {
  $("#tweet-text").on("input", function() {
    $("#alert-info").slideUp();
    const length = $(this).val().length;
    const counterNum = $(this).closest("#userInput").find(".counter");
    const newCounter = 140 - length;
    counterNum.text(newCounter);
    if (newCounter < 0) {
      $(counterNum).addClass("colorRed");
    } else {
      $(counterNum).removeClass("colorRed");
    }
  });
});
