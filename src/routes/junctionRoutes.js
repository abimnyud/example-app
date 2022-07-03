const CreateJunction = require('../handler/Junction/CreateJunction');
const DeleteJunction = require('../handler/Junction/DeleteJunction');
const getjunctionlist = require('../handler/Junction/getjunctionlist');


const express = require('express');

const router = express.Router();
router.post('/Create/',CreateJunction);
router.delete('/Delete/:id_junction', DeleteJunction);
router.get('/',  getjunctionlist);


// router.delete('/Delete/:id_genre', DeleteGenre);
// router.put('/Update/:id_genre', UpdateDataGenre);

module.exports = router; 