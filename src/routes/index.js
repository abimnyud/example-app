const router = require('express').Router();
const gameRoutes = require('./gameRoutes');

router.use('/game', gameRoutes);

router.all('*', (req, res) => {
    res.status(404).send('Not Found. Please refer to our documentation.');
  })

module.exports = router;