import { db } from './dbConnection.js';

db.query(
`CREATE TABLE IF NOT EXISTS messageboard(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255),
    message TEXT
)`);

db.query(
    `INSERT INTO messageboard (name, message) VALUES ($1, $2)`, [
    `Erik`,
    `Hello there, its me..!`
    ]
);

db.query(
    `INSERT INTO messageboard (name, message) VALUES ($1, $2)`, [
    `Andrew`,
    `Hello Andrew`
    ]
);

db.query(
    `INSERT INTO messageboard (name, message) VALUES ($1, $2)`, [
    `Andy`,
    `Hello`
    ]
);

db.query(
    `INSERT INTO messageboard (name, message) VALUES ($1, $2)`, [
    `Erik`,
    `Hello, what a wonderful day!`
    ]
);

db.query(
    `INSERT INTO messageboard (name, message) VALUES ($1, $2)`, [
    `Bertie`,
    `Hello, oh no, its cold outside!`
    ]
);