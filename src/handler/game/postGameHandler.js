const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../../../connection/dbConnect');
app.use(bodyParser.json());


const postGameHandler = async (req, res) => {
    const namaGame = req.body.nama_game;
    const tanggalGame = req.body.tanggal_rilis;
    const hargaGame = req.body.harga;
    const query = `insert into game("nama_game", "tanggal_rilis", "harga") 
                       values('${namaGame}', '${tanggalGame}', '${hargaGame}')`
    try {
        await db.query(query);
        res.status(201).send('Insertion was successful');
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = postGameHandler;