const getBukuHandler = require('../handler/buku/getBukuHandler');
const getBukuListHandler = require('../handler/buku/getbukuListHandler');
const PostTambahBuku = require('../handler/buku/PostTambahBuku');
const DeleteBuku = require('../handler/buku/DeleteBuku');
const UpdateDataBuku = require('../handler/buku/UpdateDataBuku');
const verify = require('../middleware/index')
const express = require('express');

const router = express.Router();
router.get('/', getBukuListHandler);
router.get('/find/', getBukuHandler);
router.post('/Add/', verify, PostTambahBuku);
router.delete('/Delete/:id_buku', verify, DeleteBuku);
router.put('/Update/:id_buku', verify, UpdateDataBuku);

module.exports = router;  