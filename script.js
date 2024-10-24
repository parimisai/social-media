document.addEventListener("DOMContentLoaded", function() {
    // Mock data for friends, feeds, notifications, and chats
    const friends = ["Alice", "Bob", "Charlie", "David", "Eve"];
    const feeds = [
        "Alice posted a new photo!",
        "Bob just checked in at Central Park.",
        "Charlie shared an article about JavaScript.",
        "David started a new job at TechCorp.",
        "Eve is now friends with John."
    ];
    const notifications = [
        "You have a new friend request from John.",
        "Bob liked your photo.",
        "Eve commented on your post.",
        "David mentioned you in a comment."
    ];

    // Populate Friends List
    const friendsList = document.getElementById('friends');
    friends.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        friendsList.appendChild(li);
    });

    // Populate Feeds
    const feedContainer = document.getElementById('feed-container');
    feeds.forEach(feed => {
        const div = document.createElement('div');
        div.classList.add('feed-item');
        div.textContent = feed;
        feedContainer.appendChild(div);
    });

    // Populate Notifications
    const notificationsList = document.getElementById('notifications');
    notifications.forEach(notification => {
        const li = document.createElement('li');
        li.textContent = notification;
        notificationsList.appendChild(li);
    });
});
