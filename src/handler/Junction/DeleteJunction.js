// import errorhandler from ('../../../handler/error');
const db = require('../../../connection/dbConnect');

const Deletejunction = async (req, res) => {
    const { id_junction } = req.params;
    
    const Check_Record= `SELECT * FROM "junction" WHERE "id_junction" = ${id_junction}`
    const Check = await db.query(Check_Record);

    if (Check.rows.length == 0)
        return res.status(400).send(`id_junction: ${id_junction} doesn't exist`); 
    const query = `DELETE FROM "junction" WHERE "id_junction" = ${id_junction} ;`;
  
    try {
        await db.query(query);
        res.status(200).send(`Data with id_junction = ${id_junction} has been deleted!!`);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = Deletejunction;