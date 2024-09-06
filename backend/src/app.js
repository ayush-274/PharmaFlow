// Load environment variables from .env file
require('dotenv').config();

// Import required dependencies
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Example route to check if server is running
app.get('/check', (req, res) => {
  res.json({
    message: 'Server is running',
    mongoURI: process.env.MONGO_URI,
    port: process.env.PORT,
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log('MONGO_URI:', process.env.MONGO_URI); // Log the Mongo URI
});
