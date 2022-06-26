const db = require('../../../connection/dbConnect');

const getUserHandler = async (req, res) => {
    const query = `SELECT * FROM "user" order by id_user`;

    try {
        const { rows } = await db.query(query);
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = getUserHandler;