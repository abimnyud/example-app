const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../../../connection/dbConnect');
app.use(bodyParser.json());

const updateGameHandler = async (req, res) => {
    const namaGame = req.body.nama_game;
    const tanggalGame = req.body.tanggal_rilis;
    const hargaGame = req.body.harga;
    const { id }= req.params;
    const query =
    `UPDATE GAME SET "nama_game" = '${namaGame}', "tanggal_rilis" = '${tanggalGame}', "harga" = ${hargaGame} WHERE "id_game"=${id}`;
    try {
        await db.query(query);
        res.status(200).send('Data update was successful');
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = updateGameHandler;