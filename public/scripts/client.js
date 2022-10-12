$(document).ready(function() {
  // Object of tweet datas
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  };

  createTweetElement = function (tweet) {
    const $tweet = $(`
    <article>
    <header class = "PostedTweets">
      <img src="${tweet.user.avatars}"> 
      <h3>${tweet.user.name}</h3>
      <h3 class = "atName">${tweet.user.handle}</h3>
    </header>
    <p>${tweet.content.text}</p>
    <footer> 
    ${tweet.created_at}
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

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log('test123131')
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
