import express from 'express';

const router = express.Router();
import { verifyToken } from '../middlewares/verifyToken.js';

//ambil semua data buku
import getAllBooks from '../../controllers/getAllBooks.js';
router.get('/', getAllBooks);

//ambil buku dengan nama penulis
import getBookByPenulis from '../../controllers/getBookByPenulis.js';
router.get('/bookByPenulis', getBookByPenulis);

//ambil data favorite dengan id per user
import getFavorite from '../../controllers/getUserFavorite.js';
router.get('/getFavorite/:id', getFavorite);

//menambahkan data favorit buku user
import addFavorite from '../../controllers/addFavorite.js';
router.post('/addFav', addFavorite);

export default router;
