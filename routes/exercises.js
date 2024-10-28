const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');
const auth = require('../middleware/auth');

// Get all exercises for a user
router.get('/', auth, async (req, res) => {
  try {
    const exercises = await Exercise.find({ user: req.user.id }).sort({ date: -1 });
    res.json(exercises);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Add new exercise
router.post('/', auth, async (req, res) => {
  const { type, duration, calories, notes } = req.body;

  try {
    const newExercise = new Exercise({
      user: req.user.id,
      type,
      duration,
      calories,
      notes
    });

    const exercise = await newExercise.save();
    res.json(exercise);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
