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

export const userCreate = async(req, res, next) => {
    try {
        const { id, username, password } = req.body
        const { users } = JSON.parse(fs.readFileSync('./data/db.json'))
        const user = users.find(user => user.username === username)
        if (user) {
            return next(ApiError.badRequest(`User ${username} already exists`))
        }
        const newUser = {
            id: id,
            username: username,
            password: password
        }
        users.push(newUser)
        fs.writeFileSync('./data/db.json', JSON.stringify({ users }, null, 4))
        res.status(200).json(newUser)
    } catch(error) {
        next(ApiError.serverError(error.message))
    }
}

export const userUpdate = async(req, res, next) => {
    try {
        const { id, username, password } = req.body;
        const { users } = JSON.parse(fs.readFileSync('./data/db.json'))
        const user = users.find(user => user.id === id)
        if (!user) {
            return next(ApiError.notFound(`User not found`))
        }
        const updatedUser = users.filter(user => {
            if (user.id === id) {
                user.username = username ? username : user.username
                user.password = password ? password : user.password
            }
            return user
        })
        fs.writeFileSync('./data/db.json', JSON.stringify({ users: updatedUser }, null, 4))
        res.status(200).json(updatedUser)
    } catch(error) {
        next(ApiError.serverError(error.message))
    }
}

export const userDelete = async(req, res, next) => {
    try {
        const { id } = req.params;
        const { users } = JSON.parse(fs.readFileSync('./data/db.json'))
        const user = users.find(user => user.id === Number(id))
        if (!user) {
            return next(ApiError.notFound(`User not found and cannot be deleted`))
        }

        const deletedUser = users.filter(user => user.id !== Number(id))
        fs.writeFileSync('./data/db.json', JSON.stringify({ users: deletedUser }, null, 4))
        res.status(200).json(deletedUser)
    } catch(error) {
        next(ApiError.serverError(error.message))
    }
}