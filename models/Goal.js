const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  targetExercises: { type: Number, required: true },
  targetDuration: { type: Number, required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Goal', GoalSchema);
