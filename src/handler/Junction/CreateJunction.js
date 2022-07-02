// import errorhandler from ('../../../handler/error');
const db = require('../../../connection/dbConnect');

const CreateJunction= async (req, res) => {
    const { id_buku, id_genre } = req.body;
    
    const Check_Record= `SELECT * FROM "junction" WHERE "id_buku" = ${id_buku} AND "id_genre" = ${id_genre}`
    const Check_Record_buku= `SELECT * FROM "junction" WHERE "id_genre" = ${id_genre}`
    const Check_Record_genre= `SELECT * FROM "junction" WHERE "id_buku" = ${id_buku} `
    const Check = await db.query(Check_Record);
    const Check_buku = await db.query(Check_Record_buku);
    const Check_genre = await db.query(Check_Record_genre);

    if (Check.rows.length != 0)
        return res.status(400).send(`id_buku :"${id_buku}" with id_genre "${id_genre}"  already added!`);
    if ((Check_buku.rows.length == 0) || (Check_genre.rows.length == 0))
        return res.status(400).send(`id_buku :"${id_buku}" Or id_genre "${id_genre}"  doesn't exist!`); 

    const query = `INSERT INTO "junction"("id_buku", "id_genre") VALUES (${id_buku}, ${id_genre});`;
  
    try {
        await db.query(query);
        res.status(200).send("Data Updated!!");
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = CreateJunction;