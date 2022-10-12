$(document).ready(function() {
  console.log("read function good");
  let tweetText = $("#tweet-text");
  tweetText.on("input", function () {
    const charCount = $(this).parent().find('.counter');
    const tweetLength = $(this).val().length;
    let maxLength = 140 - tweetLength;
    charCount.text(maxLength);
    //If word limit goes down to negative. Change font color to red
    if (maxLength < 0) {
      // charCount.css({ 'color'  : 'red'});
      charCount.addClass('warningColor');
    } else if (maxLength > 0) {
      charCount.removeClass('warningColor');
    }
  })
  
  let scrollToTop = $('#scrollToTop');
  scrollToTop.click(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  })
});

