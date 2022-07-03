const db = require('../../../connection/dbConnect');

const getGameList = async (req, res) => {
    const query = `SELECT * FROM game order by id_game`;

    const data = await db.query(query);
    if(data.rows.length==0) return res.status(400).send('Data is empty');
    res.status(200).json(data.rows);

}

module.exports = getGameList;