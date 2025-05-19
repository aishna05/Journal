// lib/db.ts
import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: process.env.DB_HOST,     // e.g., 'localhost'
  user: process.env.DB_USER,     // e.g., 'root'
  password: process.env.DB_PASS, // e.g., 'your_password'
  database: process.env.DB_NAME, // e.g., 'career_companion'
});
