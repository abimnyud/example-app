import fs from 'fs'
import Joi from 'joi'
import * as ApiError from '../lib/ApiError.js'

const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

export const getAllUser = async(req, res, next) => {
    // res.send('Hello World!')
    try {
        const { users } = JSON.parse(fs.readFileSync('./data/db.json'))
        if (users.length === 0) {
            return next(ApiError.notFound('No user found'))
        }

        res.json(users)
    } catch(error) {
        next(ApiError.serverError(error.message))
        // res.status(500).json(error.message)
    }
}

export const userLogin = async(req, res, next) => {
    try {
        const { users } = JSON.parse(fs.readFileSync('./data/db.json'))
        const { username, password } = await loginSchema.validateAsync(req.body)
        const user = users.find(user => user.username === username && user.password === password)
        if (!user) {
            return next(ApiError.notFound(`Invalid username or password`))
        }

        res.status(200).json({
            message: "Login Success",
            user:user
        })

    } catch(error) {
        next(ApiError.serverError(error.message))
    }
}