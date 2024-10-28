const express = require('express');
const router = express.Router();

// This is a simple in-memory array of quotes. In a real application, you might want to store these in a database.
const quotes = [
  { content: "The only bad workout is the one that didn't happen.", author: "Unknown" },
  { content: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
  { content: "Your body can stand almost anything. It's your mind that you have to convince.", author: "Unknown" },
  { content: "The hard days are the best because that's when champions are made.", author: "Gabrielle Reece" },
  { content: "If you don't make time for exercise, you'll probably have to make time for illness.", author: "Robin Sharma" }
];

// Get a random quote
router.get('/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

// Get all quotes
router.get('/', (req, res) => {
  res.json(quotes);
});

module.exports = router;
