// server.js
const express = require('express');
const app = express();
const path = require('path');

// Serve the signup page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'));
});

app.listen(4000, () => {
    console.log('Signup server is running on http://localhost:4000');
});

