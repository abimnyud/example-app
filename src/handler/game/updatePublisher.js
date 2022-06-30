const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../../../connection/dbConnect');
app.use(bodyParser.json());

const updatePublisherHandler = async (req, res) => {
    const namaPublisher = req.body.nama_publisher;
    const hq = req.body.headquarters;
    const { id }= req.params;
    const query =
    `UPDATE PUBLISHERS SET "nama_publisher" = '${namaPublisher}', "headquarters" = '${hq}' WHERE "id_publisher"=${id}`;
    try {
        await db.query(query);
        res.status(200).send('Data update was successful');
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = updatePublisherHandler;