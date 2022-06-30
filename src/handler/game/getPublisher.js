const db = require('../../../connection/dbConnect');

const getPublisher = async (req, res) => {
    const { id } = req.params;
    const query = `SELECT p.id_publisher, p.nama_publisher, p.headquarters,
    g.id_game, g.nama_game, g.tanggal_rilis, g.harga
    FROM publishers p JOIN game g ON p.id_publisher = g.id_publisher where p.id_publisher = ${id}`;

    const data = await db.query(query);
    if(data.rows.length==0) return res.status(400).send(`There is no publisher with id = ${id}`);

    res.status(200).json(data.rows);
}

module.exports = getPublisher;