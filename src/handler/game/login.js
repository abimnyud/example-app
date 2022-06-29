const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../../../connection/dbConnect');
const bcrypt = require('bcryptjs');
app.use(bodyParser.json());
const jwt = require('jsonwebtoken');

// validation
const Joi = require('@hapi/joi');
// const { valid } = require('joi');
const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
});

const login = async (req, res) => {
    // Validating user data
    const { error } = schema.validate(req.body);
    if(error)  return res.status(400).send(error.details[0].message);

    // Check If Email Exist
    const checkEmail = `SELECT * FROM "user" WHERE email = '${req.body.email}'`;
    const data = await db.query(checkEmail);
    if(data.rows.length==0) return res.status(400).send('Email not found');

    // Log In
    const { password } = req.body
    bcrypt.compare(password, data.rows[0].password, function(err, result) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message,
            });
        }
        
        if (!result) {
            return res.status(400).json({
                success: false,
                message: 'Invalid password'
            });
        }
    })

    // Create, assign token
    const token = jwt.sign({ email: data.rows[0].email }, process.env.TOKEN_SECRET);
    res.header('token', token).status(202).send('Logged in!');

}

module.exports = login;