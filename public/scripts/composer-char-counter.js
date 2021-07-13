$(document).ready(function() {
  $("#tweet-text").on('input', function() {
    const length = $(this).val().length;
    const counterNum = $(this).closest("#userInput").find(".counter")
    const newCounter = 140 - length;
    counterNum.text(newCounter);  
    });
});



