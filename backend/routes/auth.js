const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const usersPath = path.join(__dirname, '../data/users.json');

router.get('/users', (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
    const usernames = users.map(user => user.username); 
    res.status(200).json(usernames);
});

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));

    if (users.find(user => user.username === username)) {
        return res.status(400).json({ message: 'User already exists' });
    }

    users.push({ username, password });
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
    res.status(201).json({ message: 'User registered successfully' });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));

    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
});

module.exports = router;