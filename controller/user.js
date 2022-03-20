import fs from 'fs'
import Joi from 'joi'

const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

export const getAllUser = async(req, res) => {
    try {
        const { users } = JSON.parse(fs.readFileSync('./data/db.json'))
        return res.json(users)
    } catch(error) {
        return res.json({
            error: error.message
        })
    }
}

export const userLogin = async(req, res) => {
    try {
        const { users } = JSON.parse(fs.readFileSync('./data/db.json'))
        const { username, password } = await loginSchema.validateAsync(req.body) 
        const user = users.find(user => user.username === username && user.password === password)
        if(!user) {
            return res.json({
                message: 'Invalid username or password'
            })
        } 

        return res.json({
            message: 'Login Success',
            user: user
        })
    } catch(error) {
        return res.json({
            error: error.message
        })
    }
}