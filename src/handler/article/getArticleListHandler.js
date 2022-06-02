const db = require('../../../connection/dbConnect');

const getArticleListHandler = async (req, res) => {
    const query = `SELECT * FROM articles`;

    try {
        const { rows } = await db.query(query);
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = getArticleListHandler;