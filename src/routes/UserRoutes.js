const PostTambahUser = require('../handler/User/PostTambahUser');
const UserLogin = require('../handler/User/UserLogin');


const express = require('express');

const router = express.Router();
router.post('/Register/', PostTambahUser);
router.post('/Login/', UserLogin);


// router.delete('/Delete/:id_genre', DeleteGenre);
// router.put('/Update/:id_genre', UpdateDataGenre);

module.exports = router; 