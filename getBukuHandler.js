const db = require('../../../connection/dbConnect');

const getBukuHandler = async (req, res) => {
    const { judul} = req.body;
    // console.log(judul);
    
    const query = `SELECT b.id_buku, b.judul, b.tahun_terbit,  g.id_genre,
    g.Nama_genre, b.genre_buku
         FROM buku b 
    JOIN "junction" j ON b.id_buku = j.id_buku
    JOIN "Genre" g ON g.id_genre = j.id_genre
     WHERE "judul" LIKE '%${judul}%'`;
    const check = await db.query(query);
    if(check.rows.length == 0)
        return res.status(400).send(`Book's tittle with "${judul}" doesn't exist`);

    try {
        const { rows } = await db.query(query);
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = getBukuHandler;