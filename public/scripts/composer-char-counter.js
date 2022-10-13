$(document).ready(function() {
  //Determine tweet length as input types and display amount of text used
  let tweetText = $("#tweet-text");
  tweetText.on("input", function() {
    const charCount = $(this).parent().find('.counter');
    const tweetLength = $(this).val().length;
    let maxLength = 140 - tweetLength;
    charCount.text(maxLength);
    //If word limit goes down to negative. Change class that dictate CSS font color to red
    if (maxLength < 0) {
      charCount.addClass('warningColor');
    } else if (maxLength > 0) {
      charCount.removeClass('warningColor');
    }
  });

  //Show or hide button that scrolls to top of page based on web position
  let scrollToTop = $('#scrollToTop');
  let navTemplate = $('nav');
  //Initially hide the scroll button
  scrollToTop.hide();
  // Show scroll button and hide nav panel when not on top of page
  // Else, hide scroll button and show nav panel when on top of page
  $(window).scroll(() => {
    if (window.scrollY > 0) {
      scrollToTop.fadeIn();
      navTemplate.slideUp();
    } else {
      scrollToTop.fadeOut();
      navTemplate.slideDown();
    }
  });
  // Clicking on the scroll button brings you back to top of web page
  scrollToTop.click(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });
});

