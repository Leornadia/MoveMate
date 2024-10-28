const express = require('express');
const router = express.Router();
const Challenge = require('../models/Challenge');
const auth = require('../middleware/auth');

// Get all challenges
router.get('/', auth, async (req, res) => {
  try {
    const challenges = await Challenge.find().sort({ startDate: -1 });
    res.json(challenges);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Create a new challenge
router.post('/', auth, async (req, res) => {
  const { name, description, startDate, endDate, goalType, targetValue } = req.body;

  try {
    const newChallenge = new Challenge({
      name,
      description,
      startDate,
      endDate,
      goalType,
      targetValue
    });

    const challenge = await newChallenge.save();
    res.json(challenge);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Join a challenge
router.post('/join/:id', auth, async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);

    if (!challenge) {
      return res.status(404).json({ msg: 'Challenge not found' });
    }

    if (challenge.participants.includes(req.user.id)) {
      return res.status(400).json({ msg: 'Already joined this challenge' });
    }

    challenge.participants.push(req.user.id);
    await challenge.save();

    res.json(challenge);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
