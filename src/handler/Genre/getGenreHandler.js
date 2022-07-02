const db = require('../../../connection/dbConnect');

const getGenreHandler = async (req, res) => {
   const {nama_genre} = req.body
//    console.log(nama_genre)
//    console.log(tema)
    const query = `SELECT * FROM "Genre" WHERE "nama_genre" LIKE '%${nama_genre}%'`;
    const check = await db.query(query);
    if(check.rows.length == 0)
        return res.status(400).send(`There's no genre's name that contain "${nama_genre}"`);
    try {
        const { rows } = await db.query(query);
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = getGenreHandler;