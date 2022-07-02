// import errorhandler from ('../../../handler/error');
const db = require('../../../connection/dbConnect');

const UpdateJudulBuku = async (req, res) => {
    const {id_buku} = req.params;
    const { judul, Tahun_terbit } = req.body;
    
    const Check_Record= `SELECT * FROM buku WHERE id_buku = '${id_buku}'`
    const Check = await db.query(Check_Record);

    if (Check.rows.length == 0)
        return res.status(400).send(`id_buku : ${id_buku} doesn't exist`); 
    var query;
    if(judul != null && Tahun_terbit != null)
        query = `UPDATE buku SET judul = '${judul}', "Tahun_terbit" = ${Tahun_terbit} WHERE id_buku = ${id_buku};`;
    else if(judul == null && Tahun_terbit != null)
        query = `UPDATE buku SET "Tahun_terbit" = ${Tahun_terbit} WHERE id_buku = ${id_buku};`;
    else if(Tahun_terbit == null && judul != null)
        query = `UPDATE buku SET judul= '${judul}' WHERE id_buku = ${id_buku};`;

    try {
        await db.query(query);
        res.status(200).send(`Data with id_buku : ${id_buku} Updated!!`);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = UpdateJudulBuku;