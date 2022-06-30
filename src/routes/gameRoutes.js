// Game
const getGame = require('../handler/game/getGame');
const getGameList = require('../handler/game/getGameList');
const postGame = require('../handler/game/postGame');
const updateGame = require('../handler/game/updateGame');
const deleteGame = require('../handler/game/deleteGame');

// User
const createUser = require('../handler/game/createUser');
const getUser = require('../handler/game/getUser');
const login = require('../handler/game/login');

// Publisher
const getPublisher = require('../handler/game/getPublisher');
const postPublisher = require('../handler/game/postPublisher');
const updatePublisher = require('../handler/game/updatePublisher');
const deletePublisher = require('../handler/game/deletePublisher');
const express = require('express');
const verify = require ('../middleware/verifyToken');




const router = express.Router();
router.get('/', verify, getGameList);
router.get('/find/:id', verify, getGame);
router.post('/addGame', verify, postGame);
router.put('/updateGame/:id', verify, updateGame);
router.delete('/deleteGame/:id', verify, deleteGame);
router.post('/addUser', createUser);
router.get('/getUser', verify, getUser);
router.get('/publisher', verify, getPublisher);
router.post('/addPublisher', verify, postPublisher);
router.put('/updatePublisher/:id', verify, updatePublisher);
router.delete('/deletePublisher/:id', verify, deletePublisher);
router.post('/login', login);

module.exports = router;