import { db } from './dbConnection.js';
import cors from "cors";
import express, { response } from "express";

const app = express();

//config cors
app.use(cors());
app.use(express.json());

const PORT = 8080;
app.listen(PORT, () => console.log(`This app is running on port ${PORT}`));

console.log(`success 3, probably`);

app.post("/message", (req, res) => {
    const newMessage = req.body.userEntry;
    console.log(newMessage);
    const query = db.query(
        `INSERT INTO messageboard (name, message) VALUES ($1, $2)`,
        [newMessage.name, newMessage.message]
    );
    res.json({status: "success", values: newMessage});
    console.log(`Success 4, probably`);
});

app.get('/readMessages', async (req, res) => {
    const query = await db.query(`SELECT name, message FROM messageboard;`);
    console.log(query);
    res.json(query.rows);
})