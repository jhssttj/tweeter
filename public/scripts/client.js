// Test / driver code (temporary). Eventually will get this from the server.
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
}

createTweetElement = (tweetData) => {
  let renderPost = (`
  <section>
    <article>
      <header class = "PostedTweets">
        <img src="${tweetData.user.avatars}"> 
        <h3>${tweetData.user.name}</h3>
        <h3 class = "atName">${tweetData.user.handle}</h3>
      </header>
      <p>${tweetData.content.text}</p>
      <footer> 
        Posted on ${tweetData.created_at}
        <span>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </span>
      </footer>
    </article>
  </section>`)
  return renderPost;
};

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.