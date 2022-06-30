const db = require('../../../connection/dbConnect');

const getGameListHandler = async (req, res) => {
    const query = `SELECT * FROM game order by id_game`;

    const data = await db.query(query);
    if(data.rows.length==0) return res.status(400).send('Data is empty');
    res.status(200).json(data.rows[0]);

}

module.exports = getGameListHandler;