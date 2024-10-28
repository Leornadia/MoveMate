const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  calories: { type: Number },
  notes: { type: String }
});

module.exports = mongoose.model('Exercise', ExerciseSchema);
