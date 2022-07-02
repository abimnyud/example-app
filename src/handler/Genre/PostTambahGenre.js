// import errorhandler from ('../../../handler/error');
const db = require('../../../connection/dbConnect');

const PostTambahGenre = async (req, res) => {
    const { nama_genre} = req.body;
    // console.log(nama_genre)
    
    const Check_Record= `SELECT "nama_genre" FROM "Genre" WHERE "nama_genre" = '${nama_genre}'`
    const Check = await db.query(Check_Record);

    if (Check.rows.length != 0)
        return res.status(400).send(`Genre "${nama_genre}" is already exist`); 
    const query = `INSERT INTO "Genre" ("nama_genre") VALUES ('${nama_genre}');`;
  
    try {
        await db.query(query);
        res.status(200).send("Data Updated!!");
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
} 
  
module.exports = PostTambahGenre;