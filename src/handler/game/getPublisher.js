const db = require('../../../connection/dbConnect');

const getPublisher = async (req, res) => {
    const query = `SELECT * FROM publishers order by id_publisher`;

    try {
        const { rows } = await db.query(query);
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = getPublisher;