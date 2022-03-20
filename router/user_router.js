import express from "express";
import { getAllUser, userLogin } from '../controller/user.js'
const router = express.Router()

router.get('/', getAllUser)
router.post('/', userLogin)

export default router

