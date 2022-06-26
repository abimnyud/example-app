const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../../../connection/dbConnect');
const bcrypt = require('bcryptjs');
app.use(bodyParser.json());

// validation
const Joi = require('@hapi/joi');
const { valid } = require('joi');
const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
});

const login = async (req, res) => {
    // Validating user data
    const { error } = schema.validate(req.body);
    if(error)  return res.status(400).send(error.details[0].message);

    // Password Hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Correct Password
    const validPass = await bcrypt.compare(hashedPassword, user.password);
    if(!validPass) return res.status(400).send("Invalid Password");

    // Create new user
    const username = req.body.username;
    const email = req.body.email;
    const password = hashedPassword;
    const query = `insert into "user"("username", "email", "password") 
                       values('${username}', '${email}', '${password}')`
    try {
        await db.query(query);
        res.send('Registration was successful');
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = login;