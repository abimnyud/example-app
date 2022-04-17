import express from "express";
import { getAllUser, userLogin, userUpdate, userDelete, userCreate } from '../controller/user.js'
import verifyUser from '../middleware/verifyUser.js'
const router = express.Router()

router.get('/', getAllUser)
router.post('/', userLogin)
router.put('/', verifyUser , userUpdate)
router.delete('/:id', userDelete)
router.post('/register', userCreate)

export default router

