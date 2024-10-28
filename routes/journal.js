const express = require('express');
const router = express.Router();
const Journal = require('../models/Journal');
const auth = require('../middleware/auth');

// Get all journal entries for a user
router.get('/', auth, async (req, res) => {
  try {
    const entries = await Journal.find({ user: req.user.id }).sort({ date: -1 });
    res.json(entries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Add new journal entry
router.post('/', auth, async (req, res) => {
  const { content } = req.body;

  try {
    const newEntry = new Journal({
      user: req.user.id,
      content
    });

    const entry = await newEntry.save();
    res.json(entry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update a journal entry
router.put('/:id', auth, async (req, res) => {
  const { content } = req.body;

  try {
    let entry = await Journal.findById(req.params.id);

    if (!entry) return res.status(404).json({ msg: 'Journal entry not found' });

    // Make sure user owns journal entry
    if (entry.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    entry = await Journal.findByIdAndUpdate(
      req.params.id,
      { $set: { content } },
      { new: true }
    );

    res.json(entry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
