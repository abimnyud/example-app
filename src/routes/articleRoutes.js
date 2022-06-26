const getGameHandler = require('../handler/article/getGameHandler');
const getGameListHandler = require('../handler/article/getGameListHandler');
const express = require('express');

const router = express.Router();
router.get('/', getGameListHandler);
router.get('/find/:id', getGameHandler);

module.exports = router;