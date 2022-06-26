const router = require('express').Router();
const gameRoutes = require('./gameRoutes');

router.use('/game', gameRoutes);

router.all('*', (req, res) => {
    res.end('<h1>Not Found. Please refer to our documentation.</h1>');
  })

module.exports = router;