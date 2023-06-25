import express from 'express';
import { verifyTokenAdmin } from '../middlewares/verifyToken.js';
const router = express.Router();

//membuat data buku baru
import newBook from '../../controllers/newBook.js';
router.post('/addBuku', verifyTokenAdmin, newBook);

//update data buku
import updateBook from '../../controllers/updateBook.js';
router.put('/update', verifyTokenAdmin, updateBook);

//update data admin
import updateAdmin from '../../controllers/admin/updateAdmin.js';
router.put('/updateAdmin', verifyTokenAdmin, updateAdmin);

//hapus buku dari tabel buku
import deleteBook from '../../controllers/deleteBook.js';
router.delete('/delete/:id', verifyTokenAdmin, deleteBook);
export default router;

//hapur admin account
import deleteAdmin from '../../controllers/admin/deleteAdmin.js';
router.delete('/deleteAdmin/:id', verifyTokenAdmin, deleteAdmin);

/**
 * tambahan
 */

//refreshToken admin
import { refreshTokenAdmin } from '../../controllers/refreshToken.js';
router.get('/getToken', refreshTokenAdmin);
