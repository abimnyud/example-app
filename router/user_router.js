import express from "express";
import { getAllUser, userLogin } from '../controller/user.js'
const router = express.Router()

// GET all users
router.get('/', getAllUser)

// POST new user
router.post('/', userLogin)

export default router

