import { db } from './dbConnection.js';
import cors from "cors";
import express from "express";

const app = express();

//config cors
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`This app is running on port ${PORT}`));

app.post("/message", async (req, res) => {
    try{
        const newMessage = req.body.userEntry;
        const query = await db.query(
            `INSERT INTO messageboard (name, message) VALUES ($1, $2)`,
            [newMessage.name, newMessage.message]
        );
        res.json({status: "success", values: newMessage});
    } catch(error){
        res.status(500).json({Error: error.message});
    }
});

app.get('/readMessages', async (req, res) => {
    try{
        const query = await db.query(`SELECT name, message FROM messageboard;`);
        res.json(query.rows);
    } catch(error){
        res.status(500).json({Error: error.message});
    }
})