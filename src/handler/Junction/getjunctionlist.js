const db = require('../../../connection/dbConnect');
// const verify = require('../../middleware/index');

const getjunctionList = async (req, res) => {
    const query = `SELECT * FROM junction`;

    try {
        const { rows } = await db.query(query);
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = getjunctionList; 