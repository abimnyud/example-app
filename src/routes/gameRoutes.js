const getGameHandler = require('../handler/game/getGameHandler');
const getGameListHandler = require('../handler/game/getGameListHandler');
const postGameHandler = require('../handler/game/postGameHandler');
const updateGameHandler = require('../handler/game/updateGameHandler');
const deleteGameHandler = require('../handler/game/deleteGameHandler');
// const createUser = require('../handler/game/createUser';
const createUser = require('../handler/game/createUser');
const getUser = require('../handler/game/getUser');
const login = require('../handler/game/login');
const express = require('express');

const router = express.Router();
router.get('/', getGameListHandler);
router.get('/find/:id', getGameHandler);
router.post('/addGame', postGameHandler);
router.put('/updateGame/:id', updateGameHandler);
router.delete('/deleteGame/:id', deleteGameHandler);
router.post('/addUser', createUser);
router.get('/getUser', getUser);
router.post('/login', login);

module.exports = router;