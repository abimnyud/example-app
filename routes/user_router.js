import express from "express";
import { getAllUser, userLogin, userUpdate, userDelete, userCreate } from '../controller/user.js'
const router = express.Router()

router.get('/', getAllUser)
router.post('/', userLogin)
router.put('/', userUpdate)
router.delete('/:id', userDelete)
router.post('/register', userCreate)

export default router

