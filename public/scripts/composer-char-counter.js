$(document).ready(function() {
  console.log("read function good");
  let tweetText = $("#tweet-text");
  tweetText.on("input", function () {
    let charCount = $("#char_count");
    const tweetLength = $(this).val().length;
    let maxLength = 140 - tweetLength;
    charCount.text(maxLength);
    //If word limit goes down to negative. Change font color to red
    if (maxLength < 0) {
      // charCount.css({ 'color'  : 'red'});
      charCount.attr('class', 'warningColor');
    } else if (maxLength > 0) {
      charCount.attr('class', 'counter');
    }
  })  
});

