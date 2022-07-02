const router = require('express').Router();
const bukuRoutes = require('./bukuRoutes');
const GenreRoutes = require('./GenreRoutes');
const UserRoutes = require('./UserRoutes');

router.use('/buku', bukuRoutes);
router.use('/genre', GenreRoutes);
router.use('/user', UserRoutes);

router.all('*', (req, res) => {
    res.end('<h1>Not Found. Please refer to our documentation.</h1>');
  })

module.exports = router; 