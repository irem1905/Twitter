
document.addEventListener('DOMContentLoaded', function () {
  const showMoreTrendsButton = document.querySelector('.explore__trends-show-more');
  const showMoreFriendsButton = document.querySelector('.explore__friends-list-item-show-more');

  const moreTrends = [
    { category: '8. Trending', name: '#NewTrend1', tweets: '123K Tweets' },
    { category: '9. Trending', name: '#NewTrend2', tweets: '234K Tweets' }
  ];

  const moreFriends = [ 
    { imgSrc: 'twitter-img/McFly.png', name: 'İrem', username: '@sıla' },
    { imgSrc: 'twitter-img/JohnDoe.png', name: 'Prens', username: '@vahşiKelebek' },
    { imgSrc: 'twitter-img/Janis.png', name: 'Anonim', username: '@hellöö' },
  ];

  showMoreTrendsButton.addEventListener('click', function () {
    const trendsList = document.querySelector('.explore__trends-list');
    moreTrends.forEach(trend => {
      const trendItem = document.createElement('div');
      trendItem.className = 'explore__trends-list-item';
      trendItem.innerHTML = `
        <div class="explore__trends-list-item-header">
          <span class="explore__trends-list-item-category">${trend.category}</span>
        </div>
        <div class="explore__trends-list-item-name">${trend.name}</div>
        <div class="explore__trends-list-item-tweets">${trend.tweets}</div>
        <i class="fa-solid fa-chevron-down explore__trends-list-item-dropdown"></i>
      `;
      trendsList.appendChild(trendItem);
    });
  });

  showMoreFriendsButton.addEventListener('click', function () {
    const friendsList = document.querySelector('.explore__friends-list');
    moreFriends.forEach(friend => {
      const friendItem = document.createElement('div');
      friendItem.className = 'explore__friends-list-item';
      friendItem.innerHTML = `
        <img src="${friend.imgSrc}" alt="Profile Image" class="explore__friends-list-item-img"/>
        <div class="explore__friends-list-item-info">
          <div class="explore__friends-list-item-info-certified">
            <span class="explore__friends-list-item-info-name">${friend.name}</span>
            <img class="explore__friends-list-item-info-certified-img" src="twitter-img/Certified.svg" alt="Certified"/>
          </div>
          <span class="explore__friends-list-item-info-username">${friend.username}</span>
        </div>
        <button class="explore__friends-list-item-follow">Follow</button>
      `;
      friendsList.appendChild(friendItem);
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const contentMain = document.createElement('div');
  contentMain.classList.add('content__main');

  const tweets = [
    {
      imgSrc: "twitter-img/Annie.png",
      name: "Annie",
      username: "@annie",
      time: "14s",
      text: `This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. <span class="content-hashtag">#likethis</span> This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. <span class="content-hashtag">#likethis</span>`,
      tweetImage: "twitter-img/yellow.png",
      certified: true
    },
    {
      imgSrc: "twitter-img/Jorge.png",
      name: "Jorge Mckinney",
      username: "@Travis Wade",
      time: "14s",
      text: `This is a tweet. It can be long, or short. Depends on what you have
              to say. It can have some hashtags too. <span class="content-hashtag">#likethis</span>`,
      certified: true
    },
    {
      imgSrc: "twitter-img/Serenity.png",
      name: "Serenity Jones",
      username: "@Crystal Robinson",
      time: "14s",
      text: `This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. <span class="content-hashtag">#likethis</span> This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. <span class="content-hashtag">#likethis</span>`,
      tweetImage: "twitter-img/red.png",
      certified: false
    },
    {
      imgSrc: "twitter-img/Dianne.png",
      name: "Dianne Fisher",
      username: "@Clyde Lowe",
      time: "14s",
      text: `This is a tweet. It can be long, or short. Depends on what you have
              to say. It can have some hashtags too.<span class="content-hashtag">#likethis</span>`,
      tweetImage: "twitter-img/car.png",
      certified: false
    },
    {
      imgSrc: "twitter-img/Dustin.png",
      name: "Dustin Alexander",
      username: "@Kristin Murphy",
      time: "14s",
      text: `This is a tweet. It can be long, or short. Depends on what you have
              to say. It can have some hashtags too. <span class="content-hashtag">#likethis</span>`,
      tweetImage: "twitter-img/black.png",
      certified: true
    },
  ];

  tweets.forEach(tweet => {
    const tweetSection = document.createElement('div');
    tweetSection.classList.add('content__main-section');

    const userDiv = `
      <div class="content__main-section-user">
        <div class="content__main-section-user-info">
          <img src="${tweet.imgSrc}" alt="${tweet.name}" class="content__main-section-user-info-img" />
          <span class="content__main-section-user-info-name">${tweet.name}</span>
          ${tweet.certified ? '<img src="twitter-img/Certified.svg" alt="Certified" class="content__main-section-user-info-Certified" />' : ''}
        </div>
        <div class="content__main-section-user-meta">
          <span class="content__main-section-user-time">${tweet.username} • ${tweet.time}</span>
          <img src="twitter-img/Chevron down.svg" alt="Chevron"/>
        </div>
      </div>
    `;

    const tweetDiv = `
    <div class="content__main-tweet">
      <span class="content__main-tweet-text">${tweet.text}</span>
      ${tweet.tweetImage ? `<img src="${tweet.tweetImage}" alt="tweet image" class="content__main-tweet-image"/>` : ''}
      <div class="content__main-tweet-text-hashtag-actions">
        <button class="content__main-tweet-text-hashtag-actions-button" id="comment-button">
          <i class="fa-regular fa-comment"></i>
        </button>
        <button class="content__main-tweet-text-hashtag-actions-button" id="retweet-button">
          <i class="fa-solid fa-retweet"></i>
        </button>
        <button class="content__main-tweet-text-hashtag-actions-button" id="like-button">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button class="content__main-tweet-text-hashtag-actions-button" id="upload-button">
          <i class="fa-solid fa-arrow-up-from-bracket"></i>
        </button> 
      </div>
    </div>
  `;

    tweetSection.innerHTML = userDiv + tweetDiv;
    contentMain.appendChild(tweetSection);
  });

  document.querySelector('.content').appendChild(contentMain);
});

document.querySelectorAll('.explore__friends-list-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const infoBox = item.querySelector('.explore__friends-list-item-info-details');
    infoBox.style.display = 'block';
  });

  item.addEventListener('mouseleave', () => {
    const infoBox = item.querySelector('.explore__friends-list-item-info-details');
    infoBox.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'like-button' || e.target.closest('#like-button')) {
      const likeIcon = e.target.closest('#like-button').querySelector('i');
      likeIcon.classList.toggle('fa-regular');
      likeIcon.classList.toggle('fa-solid');
      likeIcon.classList.toggle('liked');
    }
  });
});

// const toggleSwitch = document.querySelector('.dark-mode-toggle');

// toggleSwitch.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });

// const tweetBtn = document.getElementById("tweetBtn");
// const tweetText = document.querySelector(".content__post-text");

// //  tweet alanı doldurulabilir
// tweetText.addEventListener("focus", function() {
//   if (tweetText.textContent === tweetText.getAttribute("data-placeholder")) {
//     tweetText.textContent = ""; 
//   }
// });

// tweetText.addEventListener("blur", function() {
//   if (tweetText.textContent.trim() === "") {
//     tweetText.textContent = tweetText.getAttribute("data-placeholder"); 
//   }
// });

// tweetBtn.addEventListener("click", function() {
//   const tweetContent = tweetText.textContent.trim();
  
//   if (tweetContent && tweetContent !== tweetText.getAttribute("data-placeholder")) {
//     alert("Your tweet: " + tweetContent); 
//     tweetText.textContent = tweetText.getAttribute("data-placeholder"); 
//   } else {
//     alert("Please write something before tweeting!");
//   }
// });


