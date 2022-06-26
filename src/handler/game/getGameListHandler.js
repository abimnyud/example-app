const db = require('../../../connection/dbConnect');

const getGameListHandler = async (req, res) => {
    const query = `SELECT * FROM game`;

    try {
        const { rows } = await db.query(query);
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = getGameListHandler;