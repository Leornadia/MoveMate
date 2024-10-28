const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  goalType: { type: String, required: true },
  targetValue: { type: Number, required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Challenge', ChallengeSchema);
