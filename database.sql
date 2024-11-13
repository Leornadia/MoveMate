-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS movemate_db;

-- Switch to the database
USE movemate_db;

-- Drop the users table if it exists to start fresh
DROP TABLE IF EXISTS users;

-- Create the users table with all required fields
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_email ON users(email);
