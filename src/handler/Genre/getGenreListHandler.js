const db = require('../../../connection/dbConnect');

const getGenreListHandler = async (req, res) => {
    const query = `SELECT g.id_genre, g.Nama_genre, (b.id_buku , b.judul) AS Buku
         FROM "Genre" g 
    JOIN "junction" j ON g.id_genre = j.id_genre
    JOIN "buku" b ON b.id_buku = j.id_buku`;

    try {
        const { rows } = await db.query(query);
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = getGenreListHandler;