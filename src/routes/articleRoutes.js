const getArticleHandler = require('../handler/article/getArticleHandler');
const getArticleListHandler = require('../handler/article/getArticleListHandler');
const express = require('express');

const router = express.Router();
router.get('/', getArticleListHandler);
router.get('/find/:id', getArticleHandler);

module.exports = router;