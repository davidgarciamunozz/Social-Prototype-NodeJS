const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/posts', postsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});