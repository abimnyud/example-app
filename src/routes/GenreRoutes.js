const getGenreHandler = require('../handler/Genre/getGenreHandler');
const getGenreListHandler = require('../handler/Genre/getGenreListHandler');
const PostTambahGenre = require('../handler/Genre/PostTambahGenre');
const DeleteGenre = require('../handler/Genre/DeleteGenre');
const UpdateDataGenre = require('../handler/Genre/UpdateDataGenre');
const verify = require('../middleware/index')
const express = require('express');

const router = express.Router();
router.get('/', getGenreListHandler);
router.get('/find/', getGenreHandler);
router.post('/create/', verify, PostTambahGenre);
router.delete('/Delete/:id_genre', verify, DeleteGenre);
router.put('/Update/:id_genre', verify, UpdateDataGenre);

module.exports = router; 