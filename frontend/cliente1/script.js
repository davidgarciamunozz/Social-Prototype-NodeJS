document.getElementById('registerBtn').addEventListener('click', () => {
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
});

document.getElementById('loginBtn').addEventListener('click', () => {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
});

document.getElementById('submitRegister').addEventListener('click', async () => {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    alert(data.message);
});

document.getElementById('submitLogin').addEventListener('click', async () => {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (response.ok) {
        document.getElementById('postForm').style.display = 'block';
        document.getElementById('loginForm').style.display = 'none';
    } else {
        alert(data.message);
    }
});

document.getElementById('submitPost').addEventListener('click', async () => {
    const title = document.getElementById('postTitle').value;
    const description = document.getElementById('postDescription').value;
    const imageUrl = document.getElementById('postImageUrl').value;
    const username = document.getElementById('loginUsername').value;

    const response = await fetch('http://localhost:8000/posts/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, title, description, imageUrl })
    });

    const data = await response.json();
    alert(data.message);
});