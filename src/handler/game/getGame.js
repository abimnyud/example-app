const db = require('../../../connection/dbConnect');

const getGameHandler = async (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM game WHERE id_game = ${id}`;

    const data = await db.query(query);
    if(data.rows.length==0) return res.status(400).send(`There is no game with id = ${id}`);

    res.status(200).json(data.rows[0]);
}

module.exports = getGameHandler;