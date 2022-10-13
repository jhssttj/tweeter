$(document).ready(function() {
  //Function to render individual tweet into the article template
  const createTweetElement = function(tweet) {
    const $tweet = $(`
    <article>
    <header class = "PostedTweets">
      <img src="${tweet.user.avatars}"> 
      <h3>${tweet.user.name}</h3>
      <h3 class = "atName">${tweet.user.handle}</h3>
    </header>
    <p>${escape(tweet.content.text)}</p>
    <footer> 
    ${timeago.format(tweet.created_at)}
      <span>
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </span>
    </footer>
  </article>`);
    return $tweet;
  };
  
  //Function to take array of tweets and render them using the createTweetElement function
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
    }
  };

  //Function below escapes the text to prevent XSS issues
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //Function to load all the tweet in our database
  const loadtweets = function() {
    $.ajax({
      method: 'GET',
      url: '/tweets',
    })
    .then ((tweets) => {
      renderTweets(tweets);
    })
    .catch((error) => {
      console.log ('ERROR:', error);
    });
  };

  //Post new tweet into the post when user submits a new tweet
  $("#tweetForm").submit((event) => {
    event.preventDefault();
    const newTweet = $('#tweetForm').serialize();
    let tweetLength = $(this).find('textarea').val().length;
    //Hide error sign before user submits and show correct error based on invalid tweet
    $('.error').hide();
    if (!tweetLength) {
      return $('#error_empty').slideDown();
    }
    if (tweetLength > 140) {
      return $('#error_over').slideDown();
    }
    //Send data when valid tweet gets posted. Update tweet data base and render new tweets
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: newTweet
    })
    .then(() => {
      $("#tweets-container").empty();
      loadtweets();
    })
    .catch((error) => {
      console.log('ERROR:', error);
    })
    //Reset new tweet form for future tweets
    $(this).find('textarea').val('');
    $(this).find('.counter').val(140);
  });

  //Code below toggles the new tweet article by clicking icon on nav panel
  $(".fa-angles-down").click(() => {
    $('.new-tweet').slideToggle();
  });

  //Initially hide error message for tweet word limit and load previously posted tweets
  $('.error').hide();
  $('.new-tweet').hide();
  loadtweets();
});
