
document.addEventListener('DOMContentLoaded', function () {
  const showMoreTrendsButton = document.querySelector('.explore__trends-show-more');
  const showMoreFriendsButton = document.querySelector('.explore__friends-list-item-show-more');

  // Örnek trend ve arkadaş verileri (bu veriler dinamik olarak yüklenebilir)
  const moreTrends = [
    { category: '7. Trending', name: '#NewTrend1', tweets: '123K Tweets' },
    { category: '8. Trending', name: '#NewTrend2', tweets: '234K Tweets' }
  ];

  const moreFriends = [
    { imgSrc: 'twitter-img/NewFriend1.png', name: 'NewFriend1', username: '@newfriend1' },
    { imgSrc: 'twitter-img/NewFriend2.png', name: 'NewFriend2', username: '@newfriend2' }
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
        <img src="${friend.imgSrc}" alt="Profile Image" class="explore__friends-list-item-img" />
        <div class="explore__friends-list-item-info">
          <div class="explore__friends-list-item-info-certified">
            <span class="explore__friends-list-item-info-name">${friend.name}</span>
            <img class="explore__friends-list-item-info-certified-img" src="twitter-img/Certified.svg" alt="Certified" />
          </div>
          <span class="explore__friends-list-item-info-username">${friend.username}</span>
        </div>
        <button class="explore__friends-list-item-follow">Follow</button>
      `;
      friendsList.appendChild(friendItem);
    });
  });
});


