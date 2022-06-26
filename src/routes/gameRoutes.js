const getGameHandler = require('../handler/game/getGameHandler');
const getGameListHandler = require('../handler/game/getGameListHandler');
const postGameHandler = require('../handler/game/postGameHandler');
const deleteGameHandler = require('../handler/game/deleteGameHandler');
const express = require('express');

const router = express.Router();
router.get('/', getGameListHandler);
router.get('/find/:id', getGameHandler);
router.post('/addGame', postGameHandler);

router.delete('/deleteGame/:id', deleteGameHandler);

module.exports = router;