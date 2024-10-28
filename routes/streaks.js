const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Exercise = require('../models/Exercise');
const auth = require('../middleware/auth');

// Get user's current streak
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({
      currentStreak: user.currentStreak,
      longestStreak: user.longestStreak
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update streak (this should be called after each exercise log)
router.post('/update', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const lastExercise = await Exercise.findOne({ user: req.user.id }).sort({ date: -1 });

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastExercise && (lastExercise.date.toDateString() === today.toDateString() || 
        lastExercise.date.toDateString() === yesterday.toDateString())) {
      user.currentStreak += 1;
      if (user.currentStreak > user.longestStreak) {
        user.longestStreak = user.currentStreak;
      }
    } else {
      user.currentStreak = 1;
    }

    await user.save();

    res.json({
      currentStreak: user.currentStreak,
      longestStreak: user.longestStreak
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
