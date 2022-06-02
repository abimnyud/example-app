const db = require('../../../connection/dbConnect');

const getArticleHandler = async (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM articles WHERE id = ${id}`;

    try {
        const { rows } = await db.query(query);
        res.status(200).json(rows[0]);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = getArticleHandler;