const db = require('../../../connection/dbConnect');

const deleteGameHandler = async(req, res) => {
    const { id } = req.params;

    const query = `delete FROM game WHERE id_game = ${id}`;

    try {
        await db.query(query);
        res.status(200).send(`Game deleted with ID: ${id}`)
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
  }

  module.exports = deleteGameHandler;