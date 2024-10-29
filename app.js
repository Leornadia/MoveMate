const express = require('express');
const { Sequelize } = require('sequelize');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to PostgreSQL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: process.env.NODE_ENV === 'production' ? {
      require: true,
      rejectUnauthorized: false
    } : false
  }
});

// Test the database connection
sequelize.authenticate()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit(1);  // Exit the process if unable to connect
  });

// Import models
const User = require('./models/User')(sequelize);
const Exercise = require('./models/Exercise')(sequelize);
const Goal = require('./models/Goal')(sequelize);
const Challenge = require('./models/Challenge')(sequelize);
const Journal = require('./models/Journal')(sequelize);

// Define associations
User.hasMany(Exercise);
Exercise.belongsTo(User);

User.hasMany(Goal);
Goal.belongsTo(User);

User.hasMany(Journal);
Journal.belongsTo(User);

Challenge.belongsToMany(User, { through: 'UserChallenges' });
User.belongsToMany(Challenge, { through: 'UserChallenges' });

// Sync all models
sequelize.sync({ alter: true })
  .then(() => console.log('Database & tables created!'))
  .catch(err => console.error('Error syncing database:', err));

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/exercises', require('./routes/exercises'));
app.use('/api/goals', require('./routes/goals'));
app.use('/api/streaks', require('./routes/streaks'));
app.use('/api/challenges', require('./routes/challenges'));
app.use('/api/journal', require('./routes/journal'));
app.use('/api/quotes', require('./routes/quotes'));

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the MoveMate API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
