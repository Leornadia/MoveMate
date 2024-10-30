const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'movemate_user',
  password: 'your_password',
  database: 'movemate_db'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Example route using MySQL
app.get('/api/users', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// Other routes...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
