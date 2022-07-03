// import errorhandler from ('../../../handler/error');
const db = require('../../../connection/dbConnect');

const DeleteBuku = async (req, res) => {
    const { id_buku } = req.params;
    
    const Check_Record= `SELECT * FROM buku WHERE id_buku = '${id_buku}'`
    const Check = await db.query(Check_Record);

    if (Check.rows.length == 0)
        return res.status(400).send(`id_buku ${id_buku} doesn't exist`); 
    const query = `DELETE FROM buku WHERE id_buku = ${id_buku} ;`;
  
    try { 
        await db.query(query);
        res.status(200).send(`Data with id_buku = ${id_buku} has been deleted!!`);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = DeleteBuku;