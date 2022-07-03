const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../../../connection/dbConnect');
const bcrypt = require('bcryptjs');
app.use(bodyParser.json());

// validation
const Joi = require('@hapi/joi');
const schema = Joi.object({
    username: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
});

const createUser = async (req, res) => {
    const email = req.body.email;

    // Validating user data
    const { error } = schema.validate(req.body);
    if(error)  return res.status(400).send(error.details[0].message);

    // Check If Email Exist
    const checkEmail = `SELECT * FROM "user" WHERE email = '${email}'`;
    const data = await db.query(checkEmail);
    if(data.rows.length>0) return res.status(400).send('Email already exist'); 

    try {
    const saltRounds=10;
    bcrypt.hash(req.body.password, saltRounds, async function(err, hashedPassword) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message,
            });
        }
        // insert to db
        const username = req.body.username;
        const query = `insert into "user"("username", "email", "password") 
                        values('${username}', '${email}', '${hashedPassword}')`
    
        await db.query(query);
    });

    // Create new user
        res.send('Registration was successful');
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = createUser;