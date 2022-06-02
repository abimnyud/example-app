const router = require('express').Router();
const articleRoutes = require('./articleRoutes');

router.use('/articles', articleRoutes);

router.all('*', (req, res) => {
    res.end('<h1>Not Found. Please refer to our documentation.</h1>');
  })

module.exports = router;