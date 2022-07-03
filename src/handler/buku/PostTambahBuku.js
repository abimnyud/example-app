// import errorhandler from ('../../../handler/error');
const db = require('../../../connection/dbConnect');

const PostTambahBuku = async (req, res) => {
    const { judul, Tahun_terbit } = req.body;
    
    const Check_Record= `SELECT judul FROM buku WHERE judul = '${judul}'`
    const Check = await db.query(Check_Record);

    if (Check.rows.length != 0)
        return res.status(400).send(`"${Check.rows[0].judul}" already added!`); 
    const query = `INSERT INTO buku ("judul", "Tahun_terbit") VALUES ('${judul}', ${Tahun_terbit});`;
  
    try {
        await db.query(query);
        res.status(200).send("Data Updated!!");
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = PostTambahBuku;