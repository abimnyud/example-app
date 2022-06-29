const getGameHandler = require('../handler/game/getGameHandler');
const getGameListHandler = require('../handler/game/getGameListHandler');
const postGameHandler = require('../handler/game/postGameHandler');
const updateGameHandler = require('../handler/game/updateGameHandler');
const deleteGameHandler = require('../handler/game/deleteGameHandler');
const createUser = require('../handler/game/createUser');
const getUser = require('../handler/game/getUser');
const login = require('../handler/game/login');
const express = require('express');
const verify = require ('../middleware/verifyToken');

const router = express.Router();
router.get('/', verify, getGameListHandler);
router.get('/find/:id', verify, getGameHandler);
router.post('/addGame', verify, postGameHandler);
router.put('/updateGame/:id', verify, updateGameHandler);
router.delete('/deleteGame/:id', verify, deleteGameHandler);
router.post('/addUser', createUser);
router.get('/getUser', verify, getUser);
router.post('/login', login);

module.exports = router;