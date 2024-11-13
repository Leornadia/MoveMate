import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function setupDatabase() {
  let connection;
  
  try {
    // First connect without database to create it if needed
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      multipleStatements: true
    });

    // Read the SQL file
    const sqlFile = await fs.readFile(
      path.join(__dirname, '..', 'database.sql'),
      'utf8'
    );

    // Execute the SQL commands
    await connection.query(sqlFile);
    
    // Switch to the created database
    await connection.query(`USE ${process.env.DB_NAME}`);

    // Create a test user with a known password
    const hashedPassword = await bcrypt.hash('testpass123', 10);
    await connection.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      ['Test User', 'test@example.com', hashedPassword]
    );
    
    console.log('Database setup completed successfully');
    console.log('Test user created:');
    console.log('Email: test@example.com');
    console.log('Password: testpass123');
  } catch (error) {
    console.error('Error setting up database:', error);
    throw error;
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

setupDatabase().catch(console.error);
