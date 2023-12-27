// server.js
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const apiKey = process.env.API_KEY || 'default_api_key';
    res.send(`<h1>Hello</h1> <br> Hello, API Key: ${apiKey}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
