const express = require('express');
const router = express.Router();

// GET all goals
router.get('/', (req, res) => {
  res.json({ message: 'GET all goals' });
});

// POST new goal
router.post('/', (req, res) => {
  res.json({ message: 'POST new goal' });
});

module.exports = router;
