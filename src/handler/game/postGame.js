const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../../../connection/dbConnect');
app.use(bodyParser.json());


const postGameHandler = async (req, res) => {
    const namaGame = req.body.nama_game;
    const tanggalGame = req.body.tanggal_rilis;
    const hargaGame = req.body.harga;
    const publisher = req.body.id_publisher;
    const query = `insert into game("nama_game", "tanggal_rilis", "harga", "id_publisher") 
                       values('${namaGame}', '${tanggalGame}', '${hargaGame}', '${publisher}')`

    // Check If Data Exist
    const checkData = `SELECT * FROM game WHERE nama_game = '${namaGame}'`;
    const data = await db.query(checkData);
    if(data.rows.length>0) return res.status(400).send('Game already exist'); 

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