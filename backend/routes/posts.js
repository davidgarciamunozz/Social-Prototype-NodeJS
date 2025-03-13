const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const postsPath = path.join(__dirname, '../data/posts.json');

router.post('/create', (req, res) => {
    const { username, title, description, imageUrl } = req.body; 
    const posts = JSON.parse(fs.readFileSync(postsPath, 'utf8'));

    posts.push({ username, title, description, imageUrl }); 
    fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2));
    res.status(201).json({ message: 'Post created successfully' });
});

router.get('/all', (req, res) => {
    const posts = JSON.parse(fs.readFileSync(postsPath, 'utf8'));
    res.status(200).json(posts);
});

module.exports = router;