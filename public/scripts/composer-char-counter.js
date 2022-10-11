

$(document).ready(function() {
  console.log("read function good");
  let tweetText = $("#tweet-text");
  tweetText.on("input", function () {
    let charCount = $(".counter");
    let limitText = 140;
    const tweetLength = $(this).val().length;
    let maxLength = limitText - tweetLength;
    charCount.text(maxLength);
  })  
});
