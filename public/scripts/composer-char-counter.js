$(document).ready(function () {
  $("#tweet-text").on("input", function () {
    $("#alert-info").slideUp();
    const length = $(this).val().length;
    const counterNum = $(this).closest("#user-input").find(".counter");
    const newCounter = 140 - length;
    counterNum.text(newCounter);
    if (newCounter < 0) {
      $(counterNum).addClass("color-red");
    } else {
      $(counterNum).removeClass("color-red");
    }
  });
});
