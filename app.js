const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// API route
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port:8080');
});
