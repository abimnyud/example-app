// import errorhandler from ('../../../handler/error');
const db = require('../../../connection/dbConnect');

const UpdateDataGenre = async (req, res) => {
    const {id_genre} = req.params;
    const { nama_genre} = req.body;
    
    const Check_Record= `SELECT * FROM "Genre" WHERE "id_genre" = '${id_genre}'`
    const Check = await db.query(Check_Record);

    if (Check.rows.length == 0)
        return res.status(400).send(`"id_genre" : ${id_genre} doesn't exist`); 
    
    const query = `UPDATE "Genre" SET "nama_genre" = '${nama_genre}' WHERE "id_genre" = ${id_genre};`;
   
    try {
        await db.query(query);
        res.status(200).send(`Data with id_genre : ${id_genre} Updated!!`);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = UpdateDataGenre;