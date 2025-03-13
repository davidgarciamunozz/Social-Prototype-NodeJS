async function fetchUsers() {
    const response = await fetch('http://localhost:8000/auth/users');
    const usernames = await response.json();
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML = '<h2>Registered Users</h2>';

    if (usernames.length > 0) {
        usersDiv.innerHTML += `<ul>${usernames.map(username => `<li>${username}</li>`).join('')}</ul>`;
    } else {
        usersDiv.innerHTML += '<p>No users registered yet.</p>';
    }
}

async function fetchPosts() {
    const response = await fetch('http://localhost:8000/posts/all');
    const posts = await response.json();
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '<h2>Posts</h2>';

    posts.forEach(post => {
        postsDiv.innerHTML += `
            <div class="post">
                <h3>${post.title}</h3>
                <p><strong>Author:</strong> ${post.username}</p>
                <p>${post.description}</p>
                <img src="${post.imageUrl}" alt="${post.title}" style="max-width: 100%; height: auto;">
            </div>
            <hr>
        `;
    });
}

// Llamar a las funciones al cargar la página
fetchUsers();
fetchPosts();