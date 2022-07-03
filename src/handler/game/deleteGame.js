const db = require('../../../connection/dbConnect');

const deleteGame = async(req, res) => {
    const { id } = req.params;

    const query = `delete FROM game WHERE id_game = ${id}`;

    const data = await db.query(query);
    if(data.rowCount==0) return res.status(400).send(`There is no game with id = ${id}`);

    res.status(200).send(`Game deleted with ID: ${id}`)
  }

  module.exports = deleteGame;