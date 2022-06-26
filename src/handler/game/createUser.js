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

// const hashPassword = (password) => {
//     return new Promise((resolve, reject) =>
//       bcrypt.hash(password, 10, (err, hash) => {
//         err ? reject(err) : resolve(hash)
//       })
//     )
//   }

//   const createUser = (user) => {
//     return database.raw(
//       `INSERT INTO user ("username", "email", "password") VALUES ('?', '?', '?', '?') RETURNING id, username`,
//       [user.username, user.password_digest, user.token]
//     )
//     .then((data) => data.rows[0])
//   }

//   const createToken = () => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, data) => {
//         err ? reject(err) : resolve(data.toString('base64'))
//       })
//     })
//   }

// const signUp = (request, response) => {
//     const user = request.body
//     hashPassword(user.password)
//       .then((hashedPassword) => {
//         delete user.password
//         user.password_digest = hashedPassword
//       })
//       .then(() => createToken())
//       .then(token => user.token = token)
//       .then(() => createUser(user))
//       .then(user => {
//         delete user.password_digest
//         response.status(201).json({ user })
//       })
//       .catch((err) => console.error(err))
//   }

const createUser = async (req, res) => {
    const email = req.body.email;

    // Validating user data
    const { error } = schema.validate(req.body);
    if(error)  return res.status(400).send(error.details[0].message);

    // Check If Email Exist
    const checkEmail = `SELECT * FROM "user" WHERE email = '${email}'`;
    await db.query(checkEmail);
    if(!error) return res.status(400).send('Email already exist'); 

    // Password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const username = req.body.username;
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

module.exports = createUser;