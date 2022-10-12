$(document).ready(function() {
  //Function to render individual tweet into the article template
  const createTweetElement = function (tweet) {
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
  </article>
    `);
    return $tweet;
  };

  //Initially hide error message for tweet word limit
  $('.error').hide();

  //Function to take array of tweets and render them using the createTweetElement function
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet)
    }
  };

  //Function to load all the tweet in our database
  const loadtweets = function () {
    $.ajax({
      method: 'GET',
      url: '/tweets',
    })
    .then ((tweets) => {
      renderTweets(tweets.reverse());
    })
    .catch((error) => {
      console.log ('ERROR:', error);
    })
  };

  loadtweets();

  //Function below escapes the text to prevent XSS issues
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //Ajax: Put posted tweet into server once submitted
  $( "#tweetForm" ).submit(( event ) => {
    event.preventDefault();
    const newTweet = $('#tweetForm').serialize();
    let tweetLength = $(this).find('textarea').val().length;
    $('.error').hide();
    if (!tweetLength) {
      return $('#error_empty').slideDown();
    }
    if (tweetLength > 140) {
      return $('#error_over').slideDown();
    }

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: newTweet
    })
    .then (() => {
      $("#tweets-container").empty();
      loadtweets();
    })
    .catch((error) => {
      console.log ('ERROR:', error);
    })
    $(this).find('textarea').val('');
  }); 
});
