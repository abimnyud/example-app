import express from 'express';

const router = express.Router();

/*
**
    admin endpoint
*/

//create new account admin (register)
import adminRegister from '../../controllers/admin/registerAdmin.js';
router.post('/admin/register', adminRegister);

//create new account admin (register)
import adminLogin from '../../controllers/admin/loginAdmin.js';
router.post('/admin/login', adminLogin);

/*
**
    user endpoint
*/

//create new account user (register)
import userRegister from '../../controllers/user/registerUser.js';
router.post('/register', userRegister);

//login user
import userLogin from '../../controllers/user/loginUser.js';
router.post('/login', userLogin);

export default router;
