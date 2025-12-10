import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

export const db = new pg.Pool({
    connectionString: process.env.DB_CONN,
});

db.query(
`CREATE TABLE IF NOT EXISTS messageboard(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255),
    message TEXT
)`);


// db.query(
// `CREATE TABLE IF NOT EXISTS messages(
//     id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     msg_name TEXT,
//     content TEXT
// )`);


// db.query(
//     `INSERT INTO messageboard (name, message) VALUES ($1, $2)`, [
//     `my name`,
//     `What a lovely day it is today. Everything is going really well.`
//     ]
// );

