$(document).ready(function() {
  // Array of tweet datas
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  //Function to render individual tweet into the article template
  const createTweetElement = function (tweet) {
    const $tweet = $(`
    <article>
    <header class = "PostedTweets">
      <img src="${tweet.user.avatars}"> 
      <h3>${tweet.user.name}</h3>
      <h3 class = "atName">${tweet.user.handle}</h3>
    </header>
    <p>${tweet.content.text}</p>
    <footer> 
    ${new Date (tweet.created_at*1000)}
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

  //Function to take array of tweets and render them using the createTweetElement function
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet)
    }
  };

  //Render the tweets using desired array of tweets
  renderTweets(data);
});
