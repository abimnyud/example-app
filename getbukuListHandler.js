const db = require('../../../connection/dbConnect');
// const verify = require('../../middleware/index');

const getBukuListHandler = async (req, res) => {
    const query = `SELECT b.id_buku, b.judul, b.tahun_terbit , g.id_genre,
    g.Nama_genre, b.genre_buku
         FROM buku b 
    JOIN "junction" j ON b.id_buku = j.id_buku
    JOIN "Genre" g ON g.id_genre = j.id_genre`;

    try {
        const { rows } = await db.query(query);
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = getBukuListHandler; 