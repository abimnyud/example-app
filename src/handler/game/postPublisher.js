const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../../../connection/dbConnect');
app.use(bodyParser.json());


const postPublisherHandler = async (req, res) => {
    const namaPublisher = req.body.nama_publisher;
    const hq = req.body.headquarters;
    const query = `insert into publishers("nama_publisher", "headquarters") 
                       values('${namaPublisher}', '${hq}')`

    // Check If Data Exist
    const checkData = `SELECT * FROM publishers WHERE nama_publisher = '${namaPublisher}'`;
    const data = await db.query(checkData);
    if(data.rows.length>0) return res.status(400).send('Publisher already exist'); 

    try {
        await db.query(query);
        res.status(201).send('Insertion was successful');
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = postPublisherHandler;