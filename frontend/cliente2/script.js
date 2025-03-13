async function fetchUsers() {
    const response = await fetch('http://localhost:8000/auth/users');
    const users = await response.json();
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML = '<h2>Users</h2>';
    users.forEach(user => {
        usersDiv.innerHTML += `<p>${user.username}</p>`;
    });
}

async function fetchPosts() {
    const response = await fetch('http://localhost:8000/posts/all');
    const posts = await response.json();
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '<h2>Posts</h2>';
    posts.forEach(post => {
        postsDiv.innerHTML += `<p><strong>${post.username}:</strong> ${post.content}</p>`;
    });
}

fetchUsers();
fetchPosts();